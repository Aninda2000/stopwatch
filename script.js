
const start=document.getElementById('start');
const stop=document.getElementById('stop');
const reset=document.getElementById('reset');
const miliSec=document.getElementById('mili-seconds');
const sec=document.getElementById('seconds');
const min=document.getElementById('minutes');
const timerImage=document.getElementsByClassName('timer');
let interval;

// handeling button click events
start.addEventListener('click',function(e){
    console.log('start button clicked');
    interval= setInterval(timer,10);
});
stop.addEventListener('click',function(e){
    console.log('stop button clicked');
    clearInterval(interval);
});
reset.addEventListener('click',function(e){
    console.log('reset button clicked');
    minite=0;
    second=0;
    miliSecond=0;
    sec.innerHTML="00";
    miliSec.innerHTML="00";
    min.innerHTML="00";
    clearInterval(interval);
});

//timer function
let miliSecond=0;
let second=0;
let minite=0;
function timer(){
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




