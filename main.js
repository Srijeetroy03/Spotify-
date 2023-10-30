function clicked(){
    location.href = "home.html"
}

// let ic=document.getElementById('ic')
// ic.style.display='none'


let audioElement = new Audio("music/pal.mp3")
let bottom_play = document.getElementById("bottom_play");


let pause_img = document.getElementById('pause_img');
let pause = document.createElement('img');
let range = document.getElementById('range');
pause.src="pause.png";
pause.style.height = '22px';
pause.style.width = '21px';

bottom_play.addEventListener('click',()=>{
    audioElement.play();
    pause_img.appendChild(pause)
    bottom_play.style.display = "none"
    pause.style.display = "block";
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

let song=document.querySelectorAll('.song')
// for(let k=0;k<song.length;k++){
//             song[k].addEventListener('mouseover',()=>{
//                 song[k].style.background='rgb(41, 41, 41)'
//             })
    
//             song[k].addEventListener('mouseout',()=>{
//                 song[k].style.background='rgb(65,64,64)'
//             })    
// }

for(let i=0;i<song.length;i++){
    song[i].addEventListener('click',()=>{
        song_index=i
        for(let j=0;j<song.length;j++){
            if(i!=j){
                song[j].style.background='rgb(65,64,64)'
            }
        }
        song[i].style.background='rgb(41, 41, 41)'
        audioElement.src=songs[song_index]
        audioElement.currentTime=0
        audioElement.play() 
        pause_img.appendChild(pause);
        // ic.style.display='block';
        // b.style.display='block';
        bottom_play.style.display = "none";
        pause.style.display = "block";
    })
}

let next = document.getElementById("next");
let prev = document.getElementById("previous");


next.addEventListener('click',()=>{
    if(song_index > songs.length)
        song_index = 0;
    else
        song_index+=1;
    
    audioElement.src = songs[song_index]
    audioElement.currentTime = 0;
    audioElement.play();
    if(song_index > songs.length){
        song[songs.length-1].style.background='rgb(65, 64, 64)'//normal
        song[song_index].style.background='rgb(41, 41, 41)'//selected colour 
    }
    else{
        song[song_index].style.background='rgb(41, 41, 41)'
        song[song_index-1].style.background='rgb(65, 64, 64)'
    }
    
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
    if(song_index<0){
        song[song_index+1].style.background='rgb(65, 64, 64)'//normal
        song[song.length-1].style.background='rgb(41, 41, 41)'//selected colour 
    }
    else{
        song[song_index].style.background='rgb(41, 41, 41)'
        song[song_index+1].style.background='rgb(65, 64, 64)'
    }
    pause_img.appendChild(pause);
    bottom_play.style.display = "none";
    pause.style.display = "block";
})

