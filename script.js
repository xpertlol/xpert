const audio = document.getElementById('myAudio');
const volumeButton = document.querySelector('.volume-button');

let isMuted = false;

volumeButton.addEventListener('click', () => {
    isMuted = !isMuted;
    audio.muted =
