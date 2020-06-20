
import { Person, Orcs, Humans, Vampires, Elves } from "./character.js";
let races = document.querySelectorAll(".race");
let itemList = document.querySelectorAll(".itemList");
let playBtn = document.getElementById("playBtn");
let players = [{name: "", item: "",} , {name: "", item: "",},];
let progressBar = document.querySelectorAll("progress");
let btnsP1 = document.querySelectorAll(".moveP1 button");
let btnsP2 = document.querySelectorAll(".moveP2 button");
let message = document.querySelector(".msg");
let moveP1 = document.querySelector(".moveP1")
let moveP2 = document.querySelector(".moveP2")
let player1;
let player2;



races.forEach((race) => {
  race.addEventListener("change", (e) => {

    console.log(race.id)
    if (race.id === "raceP1") {
      players[0].name = e.target.value;
      document.getElementById("imgRaceP1") .setAttribute("src", `./img/${event.target.value}.png`); 
    } else {
      players[1].name = e.target.value;
      document.getElementById("imgRaceP2") .setAttribute("src", `./img/${event.target.value}.png`);   
    }
  });
});

itemList.forEach((item) => {
  item.addEventListener("change", (e) => {
    item.id == "itemP1"? players[0].item = e.target.value : players[1].item = e.target.value;
  });
});

playBtn.addEventListener("click", () => {
  if(!players[0].name||!players[1].name ||!players[0].item || !players[1].item){
    alert("Remplir tout")
  }else{
  form.style.display = "none";
  zoneContainer.classList.add("show");
  player1 = createCharacter(players[0].name, players[0].item);
  player2 = createCharacter(players[1].name, players[1].item);
  updateLife()
}
});

btnsP1.forEach((btn)=>{
  btn.addEventListener("click" , ()=>{
    let msg ="";
    if(btn.id==="btnHitP1"){
      getdamage(player2 ,player1)
     updateLife()
      message.innerHTML += `<br>-> ${player1.race} makes an attack`
    }else if(btn.id==="btnHealP1"){
      message.innerHTML += `<br>-> ${player1.race} is healing life points`
      player1.heal()
      updateLife()
    }
    getOwner(player1 , player2);
    turnHandeler(moveP2 , moveP1)
  })
})

btnsP2.forEach((btn)=>{
  btn.addEventListener("click" , ()=>{
    if(btn.id==="btnHitP2"){
      getdamage(player1 ,player2);
      updateLife();
      message.innerHTML += ` <br>${player2.race} makes an attack`
     
     
    }else if(btn.id==="btnHealP2"){
      message.innerHTML += ` <br>${player2.race} is healing life points`
      player2.heal()
      updateLife()
    }
    getOwner(player1 , player2);
    turnHandeler(moveP1,moveP2) 
  })
})

function createCharacter(name, item) {
  let person = null;

  if (name === "Humans") {
    person = new Humans(item);
  } else if (name === "Orcs") {
    person = new Orcs(item);
  } else if (name === "Elves") {
    person = new Elves(item);
  } else if (name === "Vampires") {
    person = new Vampires(item);
  }
  return person;
}
function updateLife(){
  progressBar[0].value = player1.currenthealth ;
  progressBar[1].value = player2.currenthealth ;
  document.getElementById("barP1Num").innerHTML=player1.currenthealth;
  document.getElementById("barP2Num").innerHTML=player2.currenthealth;
}

function getOwner(player1 , player2){

  if(player1.currenthealth<=0){
    alert(`The woner is ${player1.race}` )
    document.location.reload()
  }
  if(player2.currenthealth<=0){
    alert(`The woner is ${player1.race}` )
    document.location.reload()
  }

}

function getdamage(player ,attrib){
  if(player.race === "Elves" || player.race==="Vampires"){
    player.damage(attrib);
  }else{
    player.damage();
  }
}

function turnHandeler(moveP1 , moveP2){
moveP1.style.display="block"
moveP2.style.display="none"
}


