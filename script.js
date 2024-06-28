console.log("welcome to spotify");
let songIndex=0;
let audioElement =new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay')
let myprogressBar= document.getElementById('myprogressBar');
let songs=[
  {songName: "salam-e- ishq",filepath: "web development/1.mp3",coverPath:"web development/1.jpeg"},
  {songName: "salam-e- ishq",filepath: "web development/1.mp3",coverPath:"web development/1.jpeg"},
  {songName: "salam-e- ishq",filepath: "web development/1.mp3",coverPath:"web development/1.jpeg"},
  {songName: "salam-e- ishq",filepath: "web development/1.mp3",coverPath:"web development/1.jpeg"},
  {songName: "salam-e- ishq",filepath: "web development/1.mp3",coverPath:"web development/1.jpeg"},
  {songName: "salam-e- ishq",filepath: "web development/1.mp3",coverPath:"web development/1.jpeg"},
  {songName: "salam-e- ishq",filepath: "web development/1.mp3",coverPath:"web development/1.jpeg"},
  {songName: "salam-e- ishq",filepath: "web development/1.mp3",coverPath:"web development/1.jpeg"},
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
    }
})

myprogressBar.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
})