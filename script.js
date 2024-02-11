let pbottom=document.querySelector(".pbottom")
let button=document.querySelector(".start")

let hit=document.querySelector(".hit")
 var time=60;
 let score=document.querySelector(".score")
 score.innerText=0;
 function increaseScore() {
    let currentScore = parseInt(score.innerText);
    score.innerText = currentScore + 10;
}
function makeBubble(){
    for (let index = 0; index <112; index++) {
         let bubble=document.createElement("div");
    bubble.classList.add("bubble")
    bubble.innerText=Math.floor(Math.random()*10)+1;
    pbottom.appendChild(bubble)
    }
   }


function randhit() {
    let hitNo=Math.floor(Math.random()*10)+1;
    hit.innerText=hitNo
}
function timmer() {
    const timerint = setInterval(() => {
        if (time >= 0) {
            let timer = document.querySelector(".time");
            timer.innerText = time--;
        } else {
            clearInterval(timerint);
            pbottom.innerHTML=`<h2 class="yourscore"><h1>Time's Up<br><span>Score: </span>${score.innerText}</h1></h2>`
            
        }
    }, 1000);
}

pbottom.addEventListener("click",(param)=>{
    let clickedNum=param.target.innerText;
    if (clickedNum==hit.innerText) {
        randhit();
        increaseScore();
    }
    else{
       
    }
})

makeBubble();
randhit();
timmer();

 