const timeline = document.querySelector('#timeline');
const inputPost = document.querySelector('#input-post');
const createBtn = document.querySelector('#create-post');

let posts = [];
let postIdCounter = 1;

window.addEventListener('DOMContentLoaded', () => {
    const saved = JSON.parse(localStorage.getItem('posts')) || [];
    const counter = parseInt(localStorage.getItem('postIdCounter'), 10) || 1;

    postIdCounter = counter;
    posts = saved.map(data => {
        const post = new Post(data.content);
        post.id = data.id;
        post.likes = data.likes;
        if (post.id >= postIdCounter) {
            postIdCounter = post.id + 1;
        }
        return post;
    });

    posts.forEach(displayPost);
});

class Post {
    constructor(content) {
        this.id = postIdCounter++;
        this.content = content;
        this.likes = 0;
    }

    clone() {
        const cloned = new Post(this.content);
        posts.push(cloned);
        savePosts();
        displayPost(cloned);
    }

    createElement() {
        const card = document.createElement('article');
        card.className = 'card mb-3';
        card.dataset.id = this.id;

        const body = document.createElement('div');
        body.className = 'card-body';
        const p = document.createElement('p');
        p.textContent = this.content;
        body.appendChild(p);

        const footer = document.createElement('div');
        footer.className = 'card-footer d-flex justify-content-between align-items-center';

        const btnGroup = document.createElement('div');

        const cloneBtn = document.createElement('button');
        cloneBtn.className = 'btn btn-primary btn-sm mr-2';
        cloneBtn.textContent = 'Clone';
        cloneBtn.dataset.action = 'clone';

        const likeBtn = document.createElement('button');
        likeBtn.className = 'btn btn-success btn-sm';
        likeBtn.textContent = 'Like';
        likeBtn.dataset.action = 'like';

        btnGroup.appendChild(cloneBtn);
        btnGroup.appendChild(likeBtn);

        const likeCount = document.createElement('span');
        likeCount.className = 'badge badge-light border shadow-sm';
        likeCount.id = `likes-${this.id}`;
        likeCount.textContent = this.likes;

        footer.appendChild(btnGroup);
        footer.appendChild(likeCount);

        card.appendChild(body);
        card.appendChild(footer);

        return card;
    }
}

function displayPost(post) {
    const element = post.createElement();
    timeline.appendChild(element);
}

function savePosts() {
    const raw = posts.map(p => ({
        id: p.id,
        content: p.content,
        likes: p.likes
    }));
    localStorage.setItem('posts', JSON.stringify(raw));
    localStorage.setItem('postIdCounter', postIdCounter);
}

createBtn.addEventListener('click', () => {
    const content = inputPost.value.trim();
    if (!content) return;

    const post = new Post(content);
    posts.push(post);
    savePosts();
    displayPost(post);
    inputPost.value = '';
});

timeline.addEventListener('click', (e) => {
    const action = e.target.dataset.action;
    if (!action) return;

    const postCard = e.target.closest('[data-id]');
    const id = Number(postCard.dataset.id);
    const post = posts.find(p => p.id === id);
    if (!post) return;

    if (action === 'clone') {
        post.clone();
    } else if (action === 'like') {
        post.likes += 1;
        document.getElementById(`likes-${post.id}`).textContent = post.likes;
        savePosts();
    }
});
