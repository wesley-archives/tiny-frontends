import { posts } from './data/posts.js';

document.addEventListener('DOMContentLoaded', () => {
    const postsContainer = document.getElementById('posts-container');

    posts.forEach(post => {
        const postElement = document.createElement('section');
        postElement.classList.add('card');

        postElement.innerHTML = `
      <h2 class="card__title">${post.title}</h2>
      <p class="card__description">${post.description}</p>
      <div class="card__tags">
        ${post.tags.map(tag => `<a href="#" class="card__tag">${tag}</a>`).join('')}
      </div>
    `;

        postsContainer.appendChild(postElement);
    });
});
