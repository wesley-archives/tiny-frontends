const imageInput = document.getElementById("imageInput");
const topText = document.getElementById("topText");
const bottomText = document.getElementById("bottomText");
const canvas = document.getElementById("memeCanvas");
const ctx = canvas.getContext("2d");
const generateBtn = document.getElementById("generateBtn");
const downloadBtn = document.getElementById("downloadBtn");

let image = new Image();

imageInput.addEventListener("change", function () {
    const file = imageInput.files[0];
    const reader = new FileReader();
    reader.onload = function (e) {
        image.src = e.target.result;
    };
    reader.readAsDataURL(file);
});

image.onload = function () {
    drawMeme();
};

function drawMeme() {
    canvas.width = image.width;
    canvas.height = image.height;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0);

    const fontSize = canvas.width * 0.05;
    ctx.font = `bold ${fontSize}px Impact`;
    ctx.fillStyle = "white";
    ctx.strokeStyle = "black";
    ctx.textAlign = "center";
    ctx.lineWidth = 3;

    ctx.fillText(topText.value.toUpperCase(), canvas.width / 2, fontSize + 10);
    ctx.strokeText(topText.value.toUpperCase(), canvas.width / 2, fontSize + 10);

    ctx.fillText(
        bottomText.value.toUpperCase(),
        canvas.width / 2,
        canvas.height - 20
    );
    ctx.strokeText(
        bottomText.value.toUpperCase(),
        canvas.width / 2,
        canvas.height - 20
    );
}

generateBtn.addEventListener("click", drawMeme);

downloadBtn.addEventListener("click", () => {
    const link = document.createElement("a");
    link.download = "meme.png";
    link.href = canvas.toDataURL();
    link.click();
});
