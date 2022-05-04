const keys = document.querySelectorAll('.key');

keys.forEach(key => {
    //change style and play sound when clicking on each sound element
    key.addEventListener('click', e => {
        playAndStyle(e.target.getAttribute('data-key'));
    });
    //revert the style
    key.addEventListener('transitionend', removeTransition);
    //change style and play sound when clicking on any items inside the element
    key.childNodes.forEach(e => {
        e.addEventListener('click', e => {
            playAndStyle(e.target.parentElement.getAttribute('data-key'));
        });
    });
});

//when pressing a key on keyboard
window.addEventListener("keydown", e => {
    playAndStyle(e.keyCode);
});

function playAndStyle(dataKey) {
    const audio = document.querySelector(`audio[data-key='${dataKey}']`);
    const key = document.querySelector(`.key[data-key='${dataKey}']`);
    if (!audio) return;
    audio.currentTime = 0; //rewind to the start of the sound
    audio.play();
    key.classList.add('playing');
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;//skip it if it's not a transform
    e.target.classList.remove('playing');
}