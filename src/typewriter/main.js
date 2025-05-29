function startTypewriter(phrases, speed = 80, pause = 1500) {
    const el = document.getElementById("type-text");
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        const visibleText = currentPhrase.slice(0, charIndex);

        el.textContent = visibleText;

        if (!isDeleting && charIndex < currentPhrase.length) {
            charIndex++;
            setTimeout(type, speed);
        } else if (isDeleting && charIndex > 0) {
            charIndex--;
            setTimeout(type, speed / 2);
        } else {
            if (!isDeleting) {
                isDeleting = true;
                setTimeout(type, pause);
            } else {
                isDeleting = false;
                phraseIndex = (phraseIndex + 1) % phrases.length;
                setTimeout(type, speed);
            }
        }
    }

    type();
}

const phrases = [
    "Lorem ipsum is placeholder text.",
    "Used in graphic, print, and publishing.",
    "It's like a design dummy text.",
    "Feels like a typewriter, right?"
];

startTypewriter(phrases);
