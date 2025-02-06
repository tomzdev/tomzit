const messages = [
    "Sei sicura?",
    "Davvero sicura??",
    "Sicurissima?",
    "Stellina per favore...",
    "Pensaci un attimo!",
    "Se dici di no, sarò molto triste...",
    "Veramente triste...",
    "Sarò molto molto molto triste...",
    "Ok va bene, smetterò di chiedere...",
    "Sto scherzando, dimmi di si per favore! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}