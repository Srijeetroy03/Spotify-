function clicked(){
    location.href = "home.html"
}
let audioElement = new Audio("music/pal.mp3")
let bottom_play = document.getElementById("bottom_play");
// bottom_play.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime == 0)
//         audioElement.play();
//     let pause = document.createElement('img');
//     pause.src = "pause.jpeg";
//     let pause_img = document.getElementById('pause_img');
//     pause_img.appendChild(pause);
//     bottom_play.style.display = 'none';
//     pause.style.height = '20px';
//     pause.style.width = '20px';
// })

let pause_img = document.getElementById('pause_img');
let pause = document.createElement('img');
let range = document.getElementById('range');
bottom_play.addEventListener('click',()=>{
     audioElement.play();
     pause.src="pause.png";
     pause_img.appendChild(pause);
     bottom_play.style.display = "none";
     pause.style.display = "block";
     pause.style.height = '22px';
     pause.style.width = '21px';

})
pause_img.addEventListener('click',()=>{
    audioElement.pause();
    pause.style.display = 'none';
    bottom_play.style.display = 'block';
})

audioElement.addEventListener('timeupdate',()=>{
    let progess = parseInt((audioElement.currentTime/audioElement.duration)*100);
    range.value = progess;
})

range.addEventListener('change',()=>{
    audioElement.currentTime = (range.value*audioElement.duration)/100;
})

let song_index = 0;
let songs=[
    'music/Pal.mp3',
    'music/kesariya.mp3',
    'music/Choo lo.mp3',
    'music/Ajab_si.mp3',
    'music/kaise_mujhe.mp3',
    'music/kaun_tujhe.mp3',
]
let next = document.getElementById("next");
let prev = document.getElementById("prev");
next.addEventListener('click',()=>{
    if(song_index > songs.length)
        song_index = 0;
    else
        song_index+=1;

    audioElement.src = songs[song_index]
    audioElement.currentTime = 0;
    audioElement.play();
    pause.src="pause.png";
    pause_img.appendChild(pause);
    bottom_play.style.display = "none";
    pause.style.display = "block";

})

prev.addEventListener('click',()=>{
    if(song_index<0){
        song_index=songs.length-1
    }

    else
       song_index-=1;

    audioElement.src=songs[song_index]
    audioElement.currentTime=0
    audioElement.play() 
    pause.src="pause.png";
    pause_img.appendChild(pause);
    bottom_play.style.display = "none";
    pause.style.display = "block";
})
    