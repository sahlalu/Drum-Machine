document.addEventListener('DOMContentLoaded', () => {
    const display = document.getElementById('display');
    const drumPads = document.querySelectorAll('.drum-pad');
    const volumeSlider = document.getElementById('volume-slider');
    const powerBtn = document.getElementById('power-btn');
    const bankBtn = document.getElementById('bank-btn');
    let powerOn = true; // Drum machine is initially powered on
  
    drumPads.forEach((pad) => {
      pad.addEventListener('click', () => {
        if (powerOn) {
          const audio = pad.querySelector('audio');
          playAudio(audio);
          display.innerText = pad.id;
        }
      });
    });
  
    document.addEventListener('keydown', (event) => {
      if (powerOn) {
        const key = event.key.toUpperCase();
        const pad = document.querySelector(`.drum-pad[data-key="${key}"]`);
        if (pad) {
          const audio = pad.querySelector('audio');
          playAudio(audio);
          display.innerText = pad.id;
        }
      }
    });
  
    volumeSlider.addEventListener('input', (event) => {
      const volume = event.target.value;
      setVolume(volume);
    });
  
    powerBtn.addEventListener('click', () => {
      powerOn = !powerOn;
      display.innerText = powerOn ? 'Power On' : 'Power Off';
    });
  
    bankBtn.addEventListener('click', () => {
      // Add functionality for changing the bank
      display.innerText = 'Bank Changed';
    });
  
    function playAudio(audio) {
      audio.currentTime = 0;
      audio.volume = volumeSlider.value;
      audio.play();
    }
  
    function setVolume(volume) {
      const audios = document.querySelectorAll('.clip');
      audios.forEach((audio) => {
        audio.volume = volume;
      });
    }
  });
  