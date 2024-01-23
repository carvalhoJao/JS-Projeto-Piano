const pianoKeys = document.querySelectorAll(".piano-keys .key");
let audio = new Audio("assets/tunes/a.wav");
let mapedKeys = [];

const playTune = (key) => {
    audio.src = `assets/tunes/${key}.wav`;
    audio.play();
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150)
};

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key)); 
    mapedKeys.push(key.dataset.key);   
});

document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    }
});