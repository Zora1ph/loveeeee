const sorryBtn = document.getElementById('sorryBtn');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');

const startSection = document.getElementById('startSection');
const forgiveSection = document.getElementById('forgiveSection');
const secretMessage = document.getElementById('secretMessage');

// Step 1: Click the giant SORRY button
sorryBtn.addEventListener('click', () => {
    startSection.style.display = 'none';
    forgiveSection.style.display = 'block';
});

// Step 2: Handle the "NO" restriction
function restrictNo() {
    alert("There is only 1 answer... guess what it is!");
}

noBtn.addEventListener('mouseover', restrictNo);
noBtn.addEventListener('click', restrictNo);

// Step 3: Reveal the final heart-felt message
yesBtn.addEventListener('click', () => {
    forgiveSection.style.display = 'none';
    secretMessage.style.display = 'block';
});