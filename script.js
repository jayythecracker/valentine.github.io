// script.js
document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('response').classList.remove('hidden');
    document.getElementById('yesButton').style.display = 'none';
    document.getElementById('noButton').style.display = 'none';
});

document.getElementById('noButton').addEventListener('mouseover', function() {
    const noButton = document.getElementById('noButton');
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;
});