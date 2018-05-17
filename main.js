window.onload = init;
let clue = [['abc', 'sky', 'toe', 'red', 'eye'], ['blue', 'face', 'hand', 'berg', 'peak'], ['serac', 'wheel', 'spool', 'phone', 'crank']];
let lv = 0;
let cNum;
let answer;
let score = 0;
let end = false;
let timeExp = false;
let lives = 5;

function init(){
    let btn = document.createElement("BUTTON");
    document.getElementById('startContainer').appendChild(btn);
    document.querySelector('#startContainer > button').innerHTML = 'Push to Start';
    document.querySelector('#startContainer > button').setAttribute('onclick', 'displayClue()');
    document.querySelector('#startContainer > button').setAttribute('id', 'startButton')    
    let input = document.querySelector('#uInput');
    input.addEventListener('keyup', checkAnswer);
    document.querySelector('#livesNumber').innerHTML = lives;
}

function displayClue(){
    if (lv < clue.length){
    let parent = document.getElementById('startContainer');
    let child = document.getElementById('startButton');
    parent.removeChild(child);
    cNum = Math.floor(Math.random() * (clue[lv].length - 0) ) + 0;
    console.log(cNum);
    let cText = document.querySelector('#clueText');
    cText.innerHTML += ' ' + clue[lv][cNum];
    document.querySelector('#answerCount').innerHTML = score;
    //document.querySelector('#livesNumber').innerHTML = lives;
    timerControl();
    }
    
}

function displayNextClue(){
    if (lv < clue.length){
    cNum = Math.floor(Math.random() * (clue[lv].length - 0) ) + 0;
    console.log(cNum);
    let cText = document.querySelector('#clueText');
    cText.innerHTML = ' ' + clue[lv][cNum];
    document.querySelector('#answerCount').innerHTML = score;
    document.querySelector('#uInput').value='';
    timerReset();
    }
}
    
function checkAnswer(){
        str = document.querySelector('#uInput').value;
        answer = str.toLowerCase();
        console.log(answer);
        if ((lv < (clue.length-1))&&(answer.length === clue[lv][cNum].length)&&(end===false)){
            console.log('checkAnswer if ran');
            
            if (answer === clue[lv][cNum]) {
            console.log('correct answer');            
            lv = lv+1;
            score = score+1;
            displayNextClue();
            } 
            else if(answer !== clue[lv][cNum]) {
                console.log('wrong answer');            
                displayNextClue();
            }

        } else if (lv===(clue.length-1)&&(answer.length === clue[lv][cNum].length)&&(end===false)){

            if (answer === clue[(lv)][cNum]) {
                console.log('correct answer2');            
                score = score+1;
                end = true;
                document.querySelector('#answerCount').innerHTML = score;
                document.getElementById('instructions').innerHTML = 'Great Success!!!';
                clearTimeout(timer5);
                clearTimeout(timer4);
                clearTimeout(timer3);
                clearTimeout(timer2);
                clearTimeout(timer1);
                clearTimeout(timer0);
                } 
            else if (answer !== clue[lv][cNum]) {
                    console.log('wrong answer');            
                    displayNextClue();
                }
        }
    }

    function timerControl() {

    timer5 = setTimeout(myTimeout5, 0000); 
    timer4 = setTimeout(myTimeout4, 1000);
    timer3 = setTimeout(myTimeout3, 2000);
    timer2 = setTimeout(myTimeout2, 3000);
    timer1 = setTimeout(myTimeout1, 4000);
    timer0 = setTimeout(myTimeout0, 5000);
    }
    function myTimeout5() {
        document.getElementById("clock").innerHTML = "5 seconds";
        document.getElementById("barSpan").style.backgroundColor = 'green';
        document.getElementById("barSpan").style.width = '100%';
    }
    function myTimeout4() {
        document.getElementById("clock").innerHTML = "4 seconds";
        document.getElementById("barSpan").style.backgroundColor = 'yellowgreen';
        document.getElementById("barSpan").style.width = '80%';
    }
    function myTimeout3() {
        document.getElementById("clock").innerHTML = "3 seconds";
        document.getElementById("barSpan").style.backgroundColor = 'yellow';
        document.getElementById("barSpan").style.width = '60%';
    }
    function myTimeout2() {
        document.getElementById("clock").innerHTML = "2 seconds";
        document.getElementById("barSpan").style.backgroundColor = 'orange';
        document.getElementById("barSpan").style.width = '40%';
    }
    function myTimeout1() {
        document.getElementById("clock").innerHTML = "1 seconds";
        document.getElementById("barSpan").style.backgroundColor = 'red';
        document.getElementById("barSpan").style.width = '20%';
    }
    function myTimeout0() {
        document.getElementById("clock").innerHTML = "0 seconds";
        document.getElementById("barSpan").style.backgroundColor = 'darkred';
        document.getElementById("barSpan").style.width = '100%';
        lives = lives - 1;
        document.querySelector('#livesNumber').innerHTML = lives;       
        timeExp = true;
        console.log('lives: ' + lives);
        setTimeout(displayNextClue, 1500);
    }

    function timerReset() {
        if (lives > 0){
        timeExp = false;
        clearTimeout(timer5);
        clearTimeout(timer4);
        clearTimeout(timer3);
        clearTimeout(timer2);
        clearTimeout(timer1);
        clearTimeout(timer0);
        timer5 = setTimeout(myTimeout5, 0000); 
        timer4 = setTimeout(myTimeout4, 1000);
        timer3 = setTimeout(myTimeout3, 2000);
        timer2 = setTimeout(myTimeout2, 3000);
        timer1 = setTimeout(myTimeout1, 4000);
        timer0 = setTimeout(myTimeout0, 5000);} 
        else if (lives === 0){
        document.querySelector('#instructions').innerHTML = 'GAME OVER!!!!';
        }
    }
