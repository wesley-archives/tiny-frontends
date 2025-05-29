const gridContainer = document.getElementById("gridContainer");
const colorPicker = document.getElementById("colorPicker");
const clearBtn = document.getElementById("clearBtn");
const resizeBtn = document.getElementById("resizeBtn");
const gridSizeInput = document.getElementById("gridSize");
const downloadBtn = document.getElementById("downloadBtn");
const fillBtn = document.getElementById("fillBtn");
const toggleGridBtn = document.getElementById("toggleGridBtn");
const eraserToggle = document.getElementById("eraserToggle");
const saveBtn = document.getElementById("saveBtn");
const loadBtn = document.getElementById("loadBtn");
const undoBtn = document.getElementById("undoBtn");
const redoBtn = document.getElementById("redoBtn");

let rows = 16;
let cols = 16;
let history = [];
let redoStack = [];

function saveState() {
    const state = Array.from(document.querySelectorAll(".pixel")).map(
        (p) => p.style.backgroundColor
    );
    history.push(state);
    redoStack = [];
}

function restoreState(state) {
    const pixels = document.querySelectorAll(".pixel");
    state.forEach((color, i) => {
        pixels[i].style.backgroundColor = color;
    });
}

undoBtn.addEventListener("click", () => {
    if (history.length > 1) {
        const lastState = history.pop();
        redoStack.push(lastState);
        restoreState(history[history.length - 1]);
    }
});

redoBtn.addEventListener("click", () => {
    if (redoStack.length > 0) {
        const nextState = redoStack.pop();
        history.push(nextState);
        restoreState(nextState);
    }
});

function createGrid(rows, cols, initialPixels = null) {
    gridContainer.style.setProperty("--cols", cols);
    gridContainer.innerHTML = "";

    for (let i = 0; i < rows * cols; i++) {
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        pixel.style.backgroundColor = initialPixels ? initialPixels[i] : "white";
        pixel.addEventListener("click", () => {
            const newColor = eraserToggle.checked ? "white" : colorPicker.value;
            pixel.style.backgroundColor = newColor;
            saveState();
        });
        gridContainer.appendChild(pixel);
    }

    saveState();
}

clearBtn.addEventListener("click", () => {
    document.querySelectorAll(".pixel").forEach((pixel) => {
        pixel.style.backgroundColor = "white";
    });
    saveState();
});

resizeBtn.addEventListener("click", () => {
    const size = parseInt(gridSizeInput.value);
    if (size >= 4 && size <= 64) {
        rows = cols = size;
        createGrid(rows, cols);
    }
});

fillBtn.addEventListener("click", () => {
    const color = eraserToggle.checked ? "white" : colorPicker.value;
    document.querySelectorAll(".pixel").forEach((pixel) => {
        pixel.style.backgroundColor = color;
    });
    saveState();
});

toggleGridBtn.addEventListener("click", () => {
    gridContainer.classList.toggle("no-gap");
});

downloadBtn.addEventListener("click", () => {
    const scale = 20;
    const canvas = document.getElementById("hiddenCanvas");
    canvas.width = cols * scale;
    canvas.height = rows * scale;
    const ctx = canvas.getContext("2d");

    const pixels = document.querySelectorAll(".pixel");
    pixels.forEach((pixel, index) => {
        const x = (index % cols) * scale;
        const y = Math.floor(index / cols) * scale;
        ctx.fillStyle = window.getComputedStyle(pixel).backgroundColor;
        ctx.fillRect(x, y, scale, scale);
    });

    const link = document.createElement("a");
    link.download = "pixel-art.png";
    link.href = canvas.toDataURL();
    link.click();
});

saveBtn.addEventListener("click", () => {
    const pixelColors = Array.from(document.querySelectorAll(".pixel")).map(
        (p) => p.style.backgroundColor
    );
    localStorage.setItem(
        "pixelArtData",
        JSON.stringify({ pixelColors, rows, cols })
    );
});

loadBtn.addEventListener("click", () => {
    const data = JSON.parse(localStorage.getItem("pixelArtData"));
    if (data) {
        rows = data.rows;
        cols = data.cols;
        gridSizeInput.value = rows;
        createGrid(rows, cols, data.pixelColors);
    }
});

function drawSimpleFace() {
    const pixels = [];
    for (let i = 0; i < rows * cols; i++) pixels.push("white");

    const setPixel = (x, y, color) => {
        if (x >= 0 && y >= 0 && x < cols && y < rows) {
            pixels[y * cols + x] = color;
        }
    };

    setPixel(5, 5, "black");
    setPixel(10, 5, "black");
    setPixel(6, 10, "black");
    setPixel(7, 11, "black");
    setPixel(8, 11, "black");
    setPixel(9, 10, "black");

    createGrid(rows, cols, pixels);
}

drawSimpleFace();
