const pianoKeys = document.querySelectorAll(".piano-keys .key");
let audio = new Audio("assets/tunes/a.wav");
let mapedKeys = [];
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input");


// Função principal
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

// Controle do teclado
document.addEventListener("keydown", (e) => {
    if(mapedKeys.includes(e.key)){
        playTune(e.key);
    }
});

// Controle de Volume
const handleVolume = (e) => {
    audio.volume = e.target.value;
}

volumeSlider.addEventListener("input", handleVolume);

const showHideKeys = () => {
    pianoKeys.forEach((key) => {
        key.classList.toggle("hide")
    })
}

keysCheck.addEventListener("click", showHideKeys);