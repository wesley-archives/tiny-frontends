const files = {
    html: `<h1>Hello</h1>`,
    css: "",
    js: ""
};

const editor = document.getElementById("editor");
const preview = document.getElementById("preview");
let currentFile = "html";

function updatePreview() {
    const html = files.html;
    const css = `<style>${files.css}</style>`;
    const js = `<script>${files.js.replace(
        /<\/script>/g,
        "<\\/script>"
    )}</script>`;

    preview.srcdoc = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Preview</title>
    ${css}
  </head>
  <body>
    ${html}
    ${js}
  </body>
  </html>`;
}

function openFile(fileType) {
    if (editor) {
        files[currentFile] = editor.value;
    }

    currentFile = fileType;

    // Update active file in the sidebar
    document.querySelectorAll(".file").forEach((file) => {
        file.classList.remove("active");
        const fileName = file.querySelector("span:last-child").textContent;
        if (
            (fileType === "html" && fileName === "index.html") ||
            (fileType === "css" && fileName === "style.css") ||
            (fileType === "js" && fileName === "script.js")
        ) {
            file.classList.add("active");
        }
    });

    // Update tab label
    const tabText = document.querySelector(".tab span:nth-child(2)");
    if (tabText) {
        tabText.textContent =
            fileType === "html"
                ? "index.html"
                : fileType === "css"
                    ? "style.css"
                    : "script.js";
    }

    // Update tab icon (text + class)
    const tabIconSpan = document.querySelector(".tab .file-icon");
    if (tabIconSpan) {
        // Set icon text
        if (fileType === "html") {
            tabIconSpan.textContent = "H";
        } else if (fileType === "css") {
            tabIconSpan.textContent = "#";
        } else if (fileType === "js") {
            tabIconSpan.textContent = "JS";
        }

        // Set classes
        tabIconSpan.className = `file-icon small ${fileType === "html"
                ? "html-icon"
                : fileType === "css"
                    ? "css-icon"
                    : "js-icon"
            }`;
    }

    // Update editor
    if (editor) {
        editor.value = files[currentFile];
    }

    updatePreview();
}

if (editor) {
    editor.value = files.html;
    editor.addEventListener("input", () => {
        files[currentFile] = editor.value;
        updatePreview();
    });
}

document.querySelectorAll(".file").forEach((file) => {
    file.addEventListener("click", () => {
        const fileName = file.querySelector("span:last-child").textContent;
        if (fileName === "index.html") {
            openFile("html");
        } else if (fileName === "style.css") {
            openFile("css");
        } else if (fileName === "script.js") {
            openFile("js");
        }
    });
});

document.getElementById("downloadBtn")?.addEventListener("click", () => {
    const htmlExport = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VS Code Clone Export</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    ${files.html}
    <script src="script.js"></script>
  </body>
  </html>`;

    downloadFile("index.html", htmlExport);
    downloadFile("style.css", files.css);
    downloadFile("script.js", files.js);
});

function downloadFile(filename, content) {
    const blob = new Blob([content], { type: "text/plain" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(link.href);
}

updatePreview();
