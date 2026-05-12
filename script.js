const words = [
    "Aspiring Software Developer",
    "Computer Engineering Student"
];

let wordIndex = 0;
let letterIndex = 0;
let isDeleting = false;

const typingText = document.querySelector(".typing-text");

function typeEffect() {
    const currentWord = words[wordIndex];

    if (isDeleting) {
        typingText.textContent = currentWord.substring(0, letterIndex--);
    } else {
        typingText.textContent = currentWord.substring(0, letterIndex++);
    }

    let typingSpeed = isDeleting ? 80 : 150;

    if (!isDeleting && letterIndex === currentWord.length + 1) {
        typingSpeed = 1800;
        isDeleting = true;
    } else if (isDeleting && letterIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 700;
    }

    setTimeout(typeEffect, typingSpeed);
}

typeEffect();