console.log("Welcome to spotify");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterPlay = document.getElementById("masterPlay");
let gif = document.getElementById("gif");
let myProgressBar = document.getElementById("myProgressBar");
let songItems = Array.from(document.getElementsByClassName("songItem"));

//songs array of key-value pairs
let songs = [
  {
    songName: "Warriyo - Mortals [NCS Release]",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "Cielo - Huma-Huma",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "DEAF KEV - Invincible [NCS Release]-320k",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Different Heaven & EH!DE - My Heart [NCS Release]",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },
  {
    songName: "Rabba - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/6.jpg",
  },
  {
    songName: "Sakhiyaan - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/7.jpg",
  },
  {
    songName: "Bhula Dena - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Tumhari Kasam - Salam-e-Ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Na Jaana - Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/10.jpg",
  },
];
//Now I have to play song on click of masterplay
masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  }
  //Pause the song on click if its already playing
  else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});

//Update the progress bar as the song play
//So timeupdate on audio
audioElement.addEventListener("timeupdate", () => {
  let progress = parseInt(
    (audioElement.currentTime / audioElement.duration) * 100
  );
  myProgressBar.value = progress;
});
myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});
songItems.forEach((element, i) => {
  // let currentSong=songs/'${`1`}'.mp3;
  let currentSong = new Audio("songs/2.mp3");
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
const makeAllPlays = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

const makeElementPlay=(e)=>{
     e.target.classList.remove("fa-pause-circle");
    e.target.classList.add("fa-play-circle");
}
const makeElementPause=(e)=>{
    e.target.classList.remove("fa-play-circle");
    e.target.classList.add("fa-pause-circle");
}

Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
  element.addEventListener("click", (e) => {
        songIndex=parseInt(e.target.id);
        makeAllPlays();
        audioElement.src="songs/3.mp3";
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        audioElement.src=`songs/${songIndex+1}.mp3`;
        audioElement.currentTime=0;
        masterPlay.classList.remove("fa-play-circle");
        masterPlay.classList.add("fa-pause-circle");
        audioElement.play();
      });
});
document.getElementById('previous').addEventListener('click',(e)=>{
  if(songIndex<=0)
  {
    songIndex=0;
  }
  else{
    songIndex-=1;
  }
  makeAllPlays();
  e.target.classList.remove('fa-play-circle');
  e.target.classList.add('fa-pause-circle');
  audioElement.src=`songs/${songIndex+1}.mp3`;
  audioElement.currentTime=0;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  document.getElementById('masterSongName').innerText=songs[songIndex].songName;
  audioElement.play();

})
document.getElementById('next').addEventListener('click',(e)=>{
  if(songIndex>=9){
    songIndex=0
  }
  else{
    songIndex+=1;
  }
  makeAllPlays();
  e.target.classList.remove('fa-play-circle');
  e.target.classList.add('fa-pause-circle');
  audioElement.src=`songs/${songIndex+1}.mp3`;
  audioElement.currentTime=0;
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
  document.getElementById('masterSongName').innerText=songs[songIndex].songName;
  audioElement.play();
})
