var timer = 60;
var score = 0;
var hitrn = 0;
var totalScore = 0

    function increaseScore() {
        score+= 10;
        document.querySelector('#scoreval').textContent = score;
        totalScore = score;
        console.log(totalScore)
    }


    function getNewHit(){
        hitrn = Math.floor(Math.random()*10);
        document.querySelector('#hitval').textContent = hitrn;
    }
    
    function makeBubble(){
        var clutter = ""
    
    
        for(var i = 1; i<=175; i++){
            var rndmboxvalue = Math.floor(Math.random()*10);
            clutter += `<div class="bubble">${rndmboxvalue}</div>`;
        }
        
        document.querySelector('.pbtm').innerHTML = clutter;
        
    }

    function runTimer(){
        var timerInt = setInterval(function () {
            if(timer> 0){
                timer --;
                document.querySelector('#timerval'). textContent = timer;
            }
            else{
                clearInterval(timerInt);
                document.querySelector('.pbtm').innerHTML =`<h1>The Game is Over<br> Total Score = ${totalScore} </h1>`
        }
            }, 1000)
    }

    document.querySelector('.pbtm').addEventListener('click', function(dets){
        var clickedVal = Number(dets.target.textContent)

        if(clickedVal === hitrn){
            increaseScore();
            makeBubble()
            getNewHit()

        }
        else{
            alert('wrong hit')
        }
    })

    runTimer();
    makeBubble();
    getNewHit();

