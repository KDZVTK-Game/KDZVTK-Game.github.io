const musicContainer = document.getElementById("music-container");
const playBtn = document.getElementById("play");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const audio = document.getElementById("audio");
const progress = document.getElementById("progress");
const progressContainer = document.getElementById("progress-container");
const title = document.getElementById("title");
const cover = document.getElementById("cover");

// Songs Titles
const songs = ["Tò tí te - Wren Evans", "Tát Nhật Lãng rực rỡ", "Hoa cỏ lau", "Sneaky Snitch", "2 Phut hon", "Nhất Tiếu Giang Hồ", "Firefly", "Oshi no ko", "FreeMan x Low", "FreeMan x Low x Zoli", "Don't Ya"];

// Keep track of song
let songIndex = 0;

// Initially load song details into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
  title.innerText = song;
  audio.src = `./nhac/${song}.mp3`;
  cover.src = `./anh/${song}.png`;
  audio.load(); // Đảm bảo audio được tải lại khi chuyển bài hát

  // Thêm sự kiện để đảm bảo thông tin bài hát đã được tải xong
  audio.addEventListener("loadedmetadata", function() {
    playSong(); // Khi thông tin đã được tải, chơi bài hát
  });
}

// Play Song
function playSong() {
  musicContainer.classList.add("play");
  playBtn.querySelector("i.fa").classList.remove("fa-play");
  playBtn.querySelector("i.fa").classList.add("fa-pause");
  audio.play();
}

// Pause Song
function pauseSong() {
  musicContainer.classList.remove("play");
  playBtn.querySelector("i.fa").classList.add("fa-play");
  playBtn.querySelector("i.fa").classList.remove("fa-pause");
  audio.pause();
}

// Previous Song
function prevSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = songs.length - 1;
  }
  audio.pause();
  loadSong(songs[songIndex]);
  playSong();
}

// Next Song
function nextSong() {
  songIndex++;
  if (songIndex > songs.length - 1) {
    songIndex = 0;
  }
  audio.pause();
  loadSong(songs[songIndex]);
  playSong();
}

// Update Progress bar
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  if (!isNaN(duration)) {
    const progressPerCent = (currentTime / duration) * 100;
    progress.style.width = `${progressPerCent}%`;
  }
}

// Set Progress
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

// Event Listeners
playBtn.addEventListener("click", () => {
  const isPlaying = musicContainer.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

// Change Song
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

// Time/Song Update
audio.addEventListener("timeupdate", updateProgress);

// Click On progress Bar
progressContainer.addEventListener("click", setProgress);

// Song End
audio.addEventListener("ended", nextSong);