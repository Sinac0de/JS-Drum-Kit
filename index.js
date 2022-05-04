window.addEventListener("keydown", e => {
    playAndStyle(e.keyCode);
});

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', e => {
        playAndStyle(e.target.getAttribute('data-key'));
    });
    key.childNodes.forEach(e => {
        e.addEventListener('click', e => {
            playAndStyle(e.target.parentElement.getAttribute('data-key'));
        });
    });
});

function playAndStyle(dataKey) {
    const audio = document.querySelector(`audio[data-key='${dataKey}']`);
    const key = document.querySelector(`.key[data-key='${dataKey}']`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}