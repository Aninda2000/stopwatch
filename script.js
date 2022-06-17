const start=document.getElementById('start');
const stop=document.getElementById('stop');
const reset=document.getElementById('reset');
const miliSec=document.getElementById('mili-seconds');
const sec=document.getElementById('seconds');
const min=document.getElementById('minutes');
const timerImage=document.getElementsByClassName('timer');
const music=new Audio('music/stopWatchmusic.mp3');
const headingimage=document.getElementsByClassName('timer');

let interval;

// handeling button click events

//start button click
start.addEventListener('click',function(e){
    start.disabled=true;    
    start.style.backgroundColor="pink";    
    console.log('start button clicked');

    //start timer
    interval= setInterval(timer,10);

    //animation start
    for(i of headingimage){
        i.style.animation="rotating ease-in-out 0.5s infinite";
    }
    // animation=setInterval(rotate,500);
});

//stop button click event
stop.addEventListener('click',function(e){
    start.style.backgroundColor="rgb(202, 16, 16)";
    start.disabled=false;
    console.log('stop button clicked');
    music.pause();

    //animation stop
    for(i of headingimage){
        i.style.animation="none";
    }

    //stop timer
    clearInterval(interval);
});
//reset button click events
reset.addEventListener('click',function(e){
    start.style.backgroundColor="rgb(202, 16, 16)";
    start.disabled=false;
    console.log('reset button clicked');

    //all minite,second,milisec will reset to 00
    minite=0;
    second=0;
    miliSecond=0;
    sec.innerHTML="00";
    miliSec.innerHTML="00";
    min.innerHTML="00";
    music.pause();

    //stop timer
    clearInterval(interval);

    //animation stop
    for(i of headingimage){
        i.style.animation="none";
    }
});


//timer function
let miliSecond=0;
let second=0;
let minite=0;
function timer(){
    //play the music
    music.play();

    //handeling mili seconds timer
    if(miliSecond<10){
        miliSec.innerHTML="0"+miliSecond++;
    }else{
        miliSec.innerHTML=miliSecond++;
    }

    //handeling seconds timer
    if(miliSecond>100){
        miliSecond=0;
        second++;
        if(second<10){
            sec.innerHTML="0"+second;
        }else{
            sec.innerHTML=second;
        }

    }

    //handeling mintes
    if(second>59){
        second=0;
        minite++;
        if(minite<10){
            min.innerHTML="0"+minite;
        }else{
            sec.innerHTML=minite;
        }
    }

}
