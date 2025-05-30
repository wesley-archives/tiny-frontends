const input = document.getElementById("markdownInput");
const preview = document.getElementById("preview");

function renderMarkdown(text) {
    return text
        .replace(/^### (.*$)/gim, "<h3>$1</h3>")
        .replace(/^## (.*$)/gim, "<h2>$1</h2>")
        .replace(/^# (.*$)/gim, "<h1>$1</h1>")
        .replace(/^\- (.*$)/gim, "<li>$1</li>")
        .replace(/(?:<li>.*?<\/li>\s*)+/gim, (match) => `<ul>${match}</ul>`)
        .replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>")
        .replace(/\*(.*?)\*/gim, "<em>$1</em>")
        .replace(
            /!\[(.*?)\]\((.*?)\)/gim,
            '<img alt="$1" src="$2" class="my-2 rounded" />'
        )
        .replace(
            /\[(.*?)\]\((.*?)\)/gim,
            '<a href="$2" class="text-blue-500 underline">$1</a>'
        )
        .replace(/\n{2,}/g, "<br /><br />");
}

function updatePreview() {
    const raw = input.value;
    preview.innerHTML = renderMarkdown(raw);
}

input.addEventListener("input", updatePreview);
window.addEventListener("DOMContentLoaded", updatePreview);
