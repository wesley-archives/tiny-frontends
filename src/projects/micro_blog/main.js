const postInput = document.getElementById("postInput");
const postBtn = document.getElementById("postBtn");
const postsContainer = document.getElementById("postsContainer");
const usernameInput = document.getElementById("username");

let posts = JSON.parse(localStorage.getItem("microblog_posts")) || [];

function savePosts() {
    localStorage.setItem("microblog_posts", JSON.stringify(posts));
}

function renderPosts() {
    postsContainer.innerHTML = "";
    posts.forEach((post, index) => {
        const postDiv = document.createElement("div");
        postDiv.className = "bg-white p-4 rounded-xl shadow relative";

        const header = document.createElement("div");
        header.className = "flex justify-between items-center mb-2";

        const user = document.createElement("span");
        user.className = "font-semibold text-blue-600";
        user.textContent = post.username || "Anonymous";

        const time = document.createElement("span");
        time.className = "text-xs text-gray-400";
        time.textContent = new Date(post.timestamp).toLocaleString();

        header.appendChild(user);
        header.appendChild(time);

        const text = document.createElement("p");
        text.textContent = post.text;
        text.className = "mb-2";

        const controls = document.createElement("div");
        controls.className = "flex items-center gap-4 text-sm text-gray-600";

        const likeBtn = document.createElement("button");
        likeBtn.textContent = `❤️ ${post.likes}`;
        likeBtn.className = "hover:text-red-600";
        likeBtn.addEventListener("click", () => {
            post.likes++;
            savePosts();
            renderPosts();
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "🗑️ Delete";
        deleteBtn.className = "hover:text-red-500";
        deleteBtn.addEventListener("click", () => {
            if (confirm("Are you sure you want to delete this post?")) {
                posts.splice(index, 1);
                savePosts();
                renderPosts();
            }
        });

        controls.appendChild(likeBtn);
        controls.appendChild(deleteBtn);

        const commentInput = document.createElement("input");
        commentInput.className =
            "w-full mt-2 p-2 border border-gray-300 rounded-md";
        commentInput.placeholder = "Write a comment...";

        const commentBtn = document.createElement("button");
        commentBtn.textContent = "Reply";
        commentBtn.className = "text-sm text-blue-600 ml-2";
        commentBtn.addEventListener("click", () => {
            const commentText = commentInput.value.trim();
            if (commentText) {
                post.comments.push({ text: commentText });
                commentInput.value = "";
                savePosts();
                renderPosts();
            }
        });

        const commentList = document.createElement("div");
        commentList.className = "mt-2 space-y-1 text-sm text-gray-700";
        post.comments.forEach((comment) => {
            const c = document.createElement("div");
            c.textContent = `💬 ${comment.text}`;
            commentList.appendChild(c);
        });

        postDiv.appendChild(header);
        postDiv.appendChild(text);
        postDiv.appendChild(controls);
        postDiv.appendChild(commentInput);
        postDiv.appendChild(commentBtn);
        postDiv.appendChild(commentList);

        postsContainer.appendChild(postDiv);
    });
}

postBtn.addEventListener("click", () => {
    const text = postInput.value.trim();
    const username = usernameInput.value.trim() || "Anonymous";
    if (text !== "") {
        posts.unshift({
            text,
            username,
            timestamp: Date.now(),
            likes: 0,
            comments: []
        });
        postInput.value = "";
        savePosts();
        renderPosts();
    }
});

renderPosts();
