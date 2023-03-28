const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const bg = document.getElementById('bg');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

const currTime = document.querySelector('#currTime');
const durTime = document.querySelector('#durTime');

const songs = [
	'Genesis - Grimes',
    'Dark Beach - Pastel Ghost',
    'Embrace - Pastel Ghost',
    'there is light in us - Mathbonus',
    'METAMORPHOSIS(Sped Up) - INTERWORLD',
    'Shelter - Porter Robinson, Madeon',
    'Aglow(Intro)(Sped Up) by Karamel',
    'Test & Recognise(Flume Re-work) - Seekae, Flume',
    'snowfall - oneheart, reidenshi',
    'Suffocation - Crystal Castles'
];

let songIndex = 9;

function loadSong(song) {

title.innerText = song;
audio.src = `${song}.mp3`;
cover.src = `${song}.jpeg`;
bg.src = `${song}.png`;
}

// function loadSong (Genesis) {

//   title.innerText = Genesis;
//   audio1.src = `Genesis.mp3`;
//   cover1.src = `Genesis.jpeg`;

// }



  //   audio.src = `Genesis.mp3`;
  //   cover.src = `Genesis.jpeg`;


  // audio.src = `DARKBEACH.mp3`;
  // cover.src = `DARKBEACH.jpeg`;

  // audio3.src = `EMBRACE.mp3`;
  // cover3.src = `EMBRACE.jpeg`;

  // audio5.src = `Mathbonus.mp3`;
  // cover5.src = `Mathbonus.jpeg`;

  // audio6.src = `METAMORPHOSIS.mp3`;
  // cover6.src = `METAMORPHOSIS.jpeg`;

  // audio7.src = `Porterrobinson.mp3`;
  // cover7.src = `Porterrobinson.jpeg`;

  // audio.src = `Aglow.mp3`;
  // cover.src = `Aglow.jpeg`;

  // audio8.src = `Seekae.mp3`;
  // cover8.src = `Seekae.jpeg`;

  // audio9.src = `snowfall.mp3`;
  // cover9.src = `snowfall.jpeg`;

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play');

  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

function playSong() {
  musicContainer.classList.add('play');
  playBtn.querySelector('i.fas').classList.remove('fa-play');
  playBtn.querySelector('i.fas').classList.add('fa-pause');

  audio.play();
}

function pauseSong() {
  musicContainer.classList.remove('play');
  playBtn.querySelector('i.fas').classList.add('fa-play');
  playBtn.querySelector('i.fas').classList.remove('fa-pause');

  audio.pause();
}

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
      songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
  songIndex++;

  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }

  loadSong(songs[songIndex]);

  playSong();
}

audio.addEventListener('timeupdate', updateProgress);

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

progressContainer.addEventListener('click', setProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

audio.addEventListener('ended', nextSong);