const clouds = document.querySelectorAll(".hole"); //Nuage verts 
const scoreBoard = document.querySelector(".score"); // score
const head = document.querySelectorAll(".head"); // toutes les tete
let lastCloud;
let timeUp = false; //  le jeu par defaut nest pas termine;
let score = 0; //le score par defaut 

function RandomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function Randomcould(clouds) {
  const indexCloud = Math.floor(Math.random() * clouds.length);
  const CloudSelect = clouds[indexCloud];

  if (CloudSelect == lastCloud) {   //verifier si le nuage renvoyer aleatoirement n'est pas le meme que le precedent
    return Randomcould(clouds);
  }
  lastCloud = CloudSelect;

  return CloudSelect;
}

function showhead1() {
  const time = RandomTime(800, 1000);   // generer un temps au hasard  compris entre 600 et 1000 s
  const cloud = Randomcould(clouds);  // sur qu'el nuage notre tete sera , est aussi aleatoire
  cloud.classList.add("up");
  setTimeout(() => {
    if (!timeUp) showhead1();
    cloud.classList.remove("up");
  }, time);
}
function showhead2() {
  const time = RandomTime(500, 800);   // generer un temps au hasard  compris entre 600 et 1000 s
  const cloud = Randomcould(clouds);  // sur qu'el nuage notre tete sera , est aussi aleatoire
  cloud.classList.add("up");
  setTimeout(() => {
    if (!timeUp) showhead2();
    cloud.classList.remove("up");
  }, time);
}
function showhead3() {
  const time = RandomTime(250, 500);   // generer un temps au hasard  compris entre 600 et 1000 s
  const cloud = Randomcould(clouds);  // sur qu'el nuage notre tete sera , est aussi aleatoire
  cloud.classList.add("up");
  setTimeout(() => {
    if (!timeUp) showhead3();
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
        function startGame1(){
                scoreBoard.textContent= 0;
                score =0;
                timeUp =false;
                showhead1();
                setTimeout(()=>{
                    timeUp= true;
                    setTimeout(()=>{
                        scoreBoard.textContent ="END";
                    },2000)
                },1000)
        }
        startGame1();

        function startGame2(){
          scoreBoard.textContent= 0;
          score =0;
          timeUp =false;
          showhead2();
          setTimeout(()=>{
              timeUp= true;
              setTimeout(()=>{
                  scoreBoard.textContent ="END";
              },2000)
          },1000)
  }
  startGame3();

  function startGame3(){
    scoreBoard.textContent= 0;
    score =0;
    timeUp =false;
    showhead3();
    setTimeout(()=>{
        timeUp= true;
        setTimeout(()=>{
            scoreBoard.textContent ="END";
        },2000)
    },1000)
}
startGame3();


        var speed=50;
         var i=0;
         var j=0;
         var k =0;

var text1 ="NOVICE";
var text2 ="APPRENTI";
var text3 ="EXPERT";

function typeWrite1(){

  if (i < text1.length){
    document.getElementById("demo1").innerHTML += text1.charAt(i);
    i++;
    setTimeout(typeWrite1,speed)
  }
}

function typeWrite2(){

  if (j < text2.length){
    document.getElementById("demo2").innerHTML += text2.charAt(j);
    j++;
    setTimeout(typeWrite2,speed)
  }
}
function typeWrite3(){

  if (k < text3.length){
    document.getElementById("demo3").innerHTML += text3.charAt(k);
    k++;
    setTimeout(typeWrite3,speed)
  }
}

function myClick(){
  for( i=1; i<=3 ; i++){
    document.getElementById("demo"+i).addEventListener("click",function(){
      document.getElementById("demo1").style.display="none";
      document.getElementById("demo2").style.display="none";
      document.getElementById("demo3").style.display="none";
    })
  }
}

document.getElementById('morty-play').addEventListener("click",function(){
    typeWrite1();
    typeWrite2();
    typeWrite3();
    myClick();
})



