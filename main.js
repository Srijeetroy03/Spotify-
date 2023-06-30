function clicked(){
    location.href="main.html"
}

let audioElement=new Audio();
let pause_img=document.getElementById('pause_img');
let pause=document.createElement('img');
let bottom_play=document.getElementById('bottom_play');
let range=document.getElementById('range');


bottom_play.addEventListener('click',()=>{
    pause.src='pause.png';
    audioElement.src=songs[songIndex];
    audioElement.play()
    pause_img.appendChild(pause)
    bottom_play.style.display='none'
    pause.style.display='block'
    pause.style.height='23px'
    pause.style.width='21px'
    pause.style.display='flex';
    pause.style.justifyContent='center'
    pause.style.alignItems='center';
})

pause_img.addEventListener('click',()=>{
    audioElement.pause();
    pause.style.display='none'
    bottom_play.style.display='block'
})

audioElement.addEventListener('timeupdate',()=>{
    let progress= parseInt((audioElement.currentTime/audioElement.duration)*100)
    range.value=progress 
})

range.addEventListener('change',()=>{
    audioElement.currentTime= (range.value*audioElement.duration)/100
})

let songIndex=0;
let songs=[
    'music/pal.mp3',
    'music/kesariya.mp3',
    'music/Choo Lo.mp3',
    'music/Ajab_si.mp3',
    'music/kaise_mujhe.mp3',
    'music/kaun_tujhe.mp3',
]

let next=document.getElementById('next')
let prev=document.getElementById('previous')
next.addEventListener('click',()=>{
    if(songIndex>songs.length-1){
        songIndex=0
    }
    else
    songIndex+=1;

    audioElement.src=songs[songIndex]
    audioElement.currentTime=0
    audioElement.play()
})

prev.addEventListener('click',()=>{
    if(songIndex<0){
        songIndex=songs.length-1
    }
    else
    songIndex-=1;

    audioElement.src=songs[songIndex]
    audioElement.currentTime=0
    audioElement.play() 
})