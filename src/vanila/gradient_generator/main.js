class RandomGradientGenerator {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.createGridItem();
    }

    createGridItem() {
        const gradientItem = document.createElement("div");
        gradientItem.classList.add("gradient-item");

        const footer = document.createElement("div");
        footer.classList.add("gradient-footer");

        const colorInfo = document.createElement("p");
        colorInfo.classList.add("color-info");

        const copyBtn = document.createElement("button");
        copyBtn.classList.add("copy-btn");
        copyBtn.textContent = "Copy CSS";

        const gradientBtn = document.createElement("button");
        gradientBtn.textContent = "🎲 Random Gradient";
        gradientBtn.addEventListener("click", () => {
            this.applyGradient(gradientItem, colorInfo, copyBtn);
        });

        copyBtn.addEventListener("click", () => {
            navigator.clipboard.writeText(copyBtn.dataset.css).then(() => {
                copyBtn.textContent = "✅ Copied!";
                setTimeout(() => (copyBtn.textContent = "Copy CSS"), 1500);
            });
        });

        footer.appendChild(colorInfo);
        footer.appendChild(copyBtn);

        const container = document.createElement("div");
        container.classList.add("gradient-item-container");
        container.appendChild(gradientItem);
        container.appendChild(footer);
        container.appendChild(gradientBtn);

        this.applyGradient(gradientItem, colorInfo, copyBtn);
        this.container.appendChild(container);
    }

    getRandomColor() {
        const r = () => Math.floor(Math.random() * 256);
        const toHex = (n) => n.toString(16).padStart(2, "0");
        const red = r(),
            green = r(),
            blue = r();
        return {
            rgb: `rgb(${red},${green},${blue})`,
            hex: `#${toHex(red)}${toHex(green)}${toHex(blue)}`
        };
    }

    getRandomAngle() {
        return Math.floor(Math.random() * 361);
    }

    applyGradient(element, colorInfoEl, copyBtnEl) {
        const start = this.getRandomColor();
        const end = this.getRandomColor();
        const angle = this.getRandomAngle();
        const css = `linear-gradient(${angle}deg, ${start.rgb}, ${end.rgb})`;

        element.style.background = css;
        colorInfoEl.textContent = `${start.hex} → ${end.hex}`;
        copyBtnEl.dataset.css = `background: ${css};`;
    }
}

new RandomGradientGenerator("gradientContainer");
