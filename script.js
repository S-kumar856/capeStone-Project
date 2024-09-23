const ruleBook = document.querySelector(".rulebook");

const gameBtn = document.querySelectorAll(".btn");
const gameBox = document.querySelector(".gamebox");
const result = document.querySelector(".frame2");
const header = document.querySelector(".frame1")
const circle = document.querySelector(".circle1");
const circle1 = document.querySelector(".circle2");
const playAgain = document.getElementById("play-again");
const playAgain2 = document.querySelector(".hurrayBtn")
const nextBtn = document.getElementById("nextBtn");

//animation
const animate1 = document.querySelector(".animate1")
const animate2 = document.querySelector(".animate2")


const hurray = document.querySelector(".hurray");



const against = document.getElementById("Against");

const winLose = document.querySelector(".win-lose")

//localStorage
const compScore = document.querySelector("#computer-score-value");
const yourScore = document.querySelector("#your-score-value");

let getCompScore = localStorage.getItem("computerScore");
let getyourScore = localStorage.getItem("myScore");

compScore.textContent = getCompScore !== null ? getCompScore : 0;
yourScore.textContent = getyourScore !== null ? getyourScore : 0;

ruleBook.style.display='none';
result.style.display = 'none';
hurray.style.display = "none"
nextBtn.style.display = "none";
// nextBtn.style.display = "none";



let userChoice;
gameBtn.forEach((x)=>{
    x.addEventListener("click", ()=>{
        userChoice = x.id;
    
        const img = getComputedStyle(x).getPropertyValue("background-image");
        const border = getComputedStyle(x).getPropertyValue("border-color");
        gameBox.style.display = "none";
        result.style.display = "";
        circle.style.backgroundImage = img;
        circle.style.borderColor = border;

        const choice_arr = ['Rock','Paper', 'Scissor'];
        const computerSelect = choice_arr[Math.floor(Math.random() * 3)];
        const res = document.getElementById(`${computerSelect}`);
        var computerChoice = res.id;

        if (computerChoice === "Rock") {
            circle1.style.backgroundImage = `url("/images/rock.png")`;
            circle1.style.borderColor = "#0074b6";
          } else if (computerChoice === "Paper") {
            circle1.style.backgroundImage = `url("/images/paper.png")`;
            circle1.style.borderColor = "#ffa943";
          } else if (computerChoice === "Scissor") {
            circle1.style.backgroundImage = `url("/images/scissor.png")`;
            circle1.style.borderColor = "#bd00ff";
          }



        //localStorage        
        const gameRes = gamePlay(userChoice, computerChoice);
        winLose.innerHTML = gameRes;

        //animation
        if(gameRes === "TIE UP"){
            against.innerHTML = "";
            playAgain.textContent = "REPLAY"
            nextBtn.style.display = "none"
            animate1.style.display = "";
            animate2.style.display = "";
        }

        if(gameRes === "YOU LOSE"){
            compScore.textContent = parseInt(compScore.textContent)+1;
            localStorage.setItem("computerScore",compScore.textContent)
            against.innerHTML = "AGANIST PC";
            playAgain.textContent = "PLAY AGAIN"
            nextBtn.style.display = "none";
            animate1.style.display = "none";
            animate2.style.display = "";
        }
        
        
        else if(gameRes === "YOU WIN"){
            yourScore.textContent = parseInt(yourScore.textContent)+1;
            localStorage.setItem("myScore",yourScore.textContent )
            against.innerHTML = "AGANIST PC";
            playAgain.textContent = "PLAY AGAIN"
            nextBtn.style.display = ""
            animate1.style.display = "";
            animate2.style.display = "none";

        }

        
    })
      
})  
   
// ---------------GameRule-------------------------
function gamePlay(userChoice, computerChoice){
    if((userChoice === 'Rock' && computerChoice === 'Scissor') || 
        (userChoice === 'Paper' && computerChoice === 'Rock') || 
        (userChoice === 'Scissor' && computerChoice === 'Paper')){
           return "YOU WIN";

    }else if(userChoice === computerChoice){
        return "TIE UP";
        
    }
    else{
        return "YOU LOSE";
    }
}

// ------- next page------------------
function nextPage(){
    gameBox.style.display = "none";
    header.style.display = "none";
    hurray.style.display = "";
    nextBtn.style.display = "none";
    result.style.display = 'none';

}

// -----------------playagain------------
function play(){
    header.style.display = "";
    hurray.style.display = "none"
    gameBox.style.display = "";
    result.style.display = "none";
    nextBtn.style.display = "none";
}

//  -----------------ruleboox------------------------------------
function rules(){
    // hide.classList.toggle("hidden");
    if(ruleBook.style.display ==="none"){
        ruleBook.style.display = "";
    }else{
        ruleBook.style.display = "none"
    }
}





