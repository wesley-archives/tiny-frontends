window.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");
    let drawing = false;
    let startX = 0,
        startY = 0;
    let tool = "pen";

    const toolbar = document.querySelector(".toolbar");
    toolbar.addEventListener("click", (e) => {
        if (e.target.tagName === "BUTTON") {
            document
                .querySelectorAll(".toolbar button")
                .forEach((btn) => btn.classList.remove("active"));
            e.target.classList.add("active");
            tool = e.target.dataset.tool;

            if (tool === "clear") {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                document.querySelectorAll(".postit").forEach((el) => el.remove());
                tool = "pen";
                document.querySelector('[data-tool="pen"]').classList.add("active");
            }
        }
    });

    canvas.addEventListener("mousedown", (e) => {
        drawing = true;
        startX = e.offsetX;
        startY = e.offsetY;

        if (tool === "pen") {
            ctx.beginPath();
            ctx.moveTo(startX, startY);
        } else if (tool === "text") {
            const text = prompt("Enter text:");
            if (text) {
                ctx.font = "16px Inter, sans-serif";
                ctx.fillText(text, startX, startY);
            }
            drawing = false;
        } else if (tool === "postit") {
            const postIt = document.createElement("textarea");
            postIt.className = "postit";
            postIt.style.left = `${e.pageX}px`;
            postIt.style.top = `${e.pageY}px`;
            document.body.appendChild(postIt);
            drawing = false;
        }
    });

    canvas.addEventListener("mousemove", (e) => {
        if (!drawing) return;
        const x = e.offsetX;
        const y = e.offsetY;
        if (tool === "pen") {
            ctx.lineTo(x, y);
            ctx.stroke();
        }
    });

    canvas.addEventListener("mouseup", (e) => {
        if (!drawing) return;
        drawing = false;
        const endX = e.offsetX;
        const endY = e.offsetY;
        ctx.beginPath();

        if (tool === "line") {
            ctx.moveTo(startX, startY);
            ctx.lineTo(endX, endY);
            ctx.stroke();
        } else if (tool === "rect") {
            ctx.rect(startX, startY, endX - startX, endY - startY);
            ctx.stroke();
        } else if (tool === "circle") {
            const radius = Math.hypot(endX - startX, endY - startY);
            ctx.arc(startX, startY, radius, 0, Math.PI * 2);
            ctx.stroke();
        } else if (tool === "triangle") {
            ctx.moveTo(startX, endY);
            ctx.lineTo((startX + endX) / 2, startY);
            ctx.lineTo(endX, endY);
            ctx.closePath();
            ctx.stroke();
        }
    });
});
