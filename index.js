const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const head = document.querySelectorAll(".head");
let lastCloud;
let timeUp = false; //  le jeu par defaut nest pas termine;
let score = 0;

function RandomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function Randomcould(clouds) {
  const indexCloud = Math.floor(Math.random() * clouds.length);
  const CloudSelect = clouds[indexCloud];

  if (CloudSelect == lastCloud) {
    return Randomcould(clouds);
  }
  lastCloud = CloudSelect;

  return CloudSelect;
}

function showhead() {
  const time = RandomTime(600, 1000);
  const cloud = Randomcould(clouds);
  cloud.classList.add("up");
  setTimeout(() => {
    if (!timeUp) showhead();
    cloud.classList.remove("up");
  }, time);
}

function playerScore(e) {
  console.log(e);
  if (!e.isTrusted) {
    return;
  } else {
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
  }
}

head.forEach((head_element) => {
  head_element.addEventListener("click", playerScore);
});
        function startGame(){
                scoreBoard.textContent= 0;
                score =0;
                timeUp =false;
                showhead();
                setTimeout(()=>{
                    timeUp= true;
                    setTimeout(()=>{
                        scoreBoard.textContent ="END";
                    },2000)
                },1000)
        }
        startGame();


