const lengthInput = document.getElementById("lengthInput");
const lengthDisplay = document.getElementById("lengthDisplay");
const result = document.getElementById("result");
const generateBtn = document.getElementById("generateBtn");
const copyMsg = document.getElementById("copyMsg");

const includeUpper = document.getElementById("includeUpper");
const includeLower = document.getElementById("includeLower");
const includeNumbers = document.getElementById("includeNumbers");
const includeSymbols = document.getElementById("includeSymbols");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()-_=+[]{};:,.<>?";

lengthInput.addEventListener("input", () => {
    lengthDisplay.textContent = lengthInput.value;
});

generateBtn.addEventListener("click", () => {
    const length = +lengthInput.value;
    let charset = "";

    if (includeUpper.checked) charset += upper;
    if (includeLower.checked) charset += lower;
    if (includeNumbers.checked) charset += numbers;
    if (includeSymbols.checked) charset += symbols;

    let password = "";
    for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * charset.length);
        password += charset[index];
    }

    result.textContent = password || "Please select at least one option";
    copyMsg.classList.add("hidden");
});

result.addEventListener("click", () => {
    const password = result.textContent;
    navigator.clipboard.writeText(password).then(() => {
        copyMsg.classList.remove("hidden");
        setTimeout(() => copyMsg.classList.add("hidden"), 2000);
    });
});
