//Use this script to generate your character
class Person {
  constructor(race, item) {
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    this.min = 3;
    this.maxDamage = 20;
    this.maxHealing = 30;

    this.heal = function () {

       /*HUMANS*/
       if(this.race ==="Humans"){
        if(this.item ==="Boots"){
          this.currenthealth = this.currenthealth+1;
        }
        if(this.item ==="Staff"){
          this.currenthealth = this.currenthealth+1;
        }
        if(this.item ==="Sword"){
          this.currenthealth = this.currenthealth+1;
        }
        if(this.item ==="Bow"){
          this.currenthealth = this.currenthealth+1;
        }

      }


      /*orcs*/
      if(this.race ==="Orcs"){
        if(this.item ==="Boots"){
          this.currenthealth = this.currenthealth+1;
        }
        if(this.item ==="Staff"){
          this.currenthealth = this.currenthealth+1;
        }
        if(this.item ==="Sword"){
          this.currenthealth = this.currenthealth+1;
        }
        if(this.item ==="Bow"){
          this.currenthealth = this.currenthealth+1;
        }

      }

      /*Elves*/
      if(this.race ==="Elves"){
        if(this.item ==="Boots"){
          this.currenthealth = this.currenthealth+1;
        }
        if(this.item ==="Staff"){
          this.currenthealth = this.currenthealth+1;
        }
        if(this.item ==="Sword"){
          this.currenthealth = this.currenthealth+1;
        }
        if(this.item ==="Bow"){
          this.currenthealth = this.currenthealth+1;
        }

      }

        /*Vampires*/
        if(this.race ==="Vampires"){
          if(this.item ==="Boots"){
            this.currenthealth = this.currenthealth+1;
          }
          if(this.item ==="Staff"){
            this.currenthealth = this.currenthealth+1;
          }
          if(this.item ==="Sword"){
            this.currenthealth = this.currenthealth+1;
          }
          if(this.item ==="Bow"){
            this.currenthealth = this.currenthealth+1;
          }
 
        }

    };

    this.damage = function () {

      /*HUMANS*/
        if(this.race ==="Humans"){
          if(this.item ==="Boots"){
            this.currenthealth = this.currenthealth-1;
          }
          if(this.item ==="Staff"){
            this.currenthealth = this.currenthealth-1;
          }
          if(this.item ==="Sword"){
            this.currenthealth = this.currenthealth-1;
          }
          if(this.item ==="Bow"){
            this.currenthealth = this.currenthealth-1;
          }
 
        }


        /*orcs*/
        if(this.race ==="Orcs"){
          if(this.item ==="Boots"){
            this.currenthealth = this.currenthealth-1;
          }
          if(this.item ==="Staff"){
            this.currenthealth = this.currenthealth-1;
          }
          if(this.item ==="Sword"){
            this.currenthealth = this.currenthealth-1;
          }
          if(this.item ==="Bow"){
            this.currenthealth = this.currenthealth-1;
          }
 
        }

        /*Elves*/
        if(this.race ==="Elves"){
          if(this.item ==="Boots"){
            this.currenthealth = this.currenthealth-1;
          }
          if(this.item ==="Staff"){
            this.currenthealth = this.currenthealth-1;
          }
          if(this.item ==="Sword"){
            this.currenthealth = this.currenthealth-1;
          }
          if(this.item ==="Bow"){
            this.currenthealth = this.currenthealth-1;
          }
 
        }

          /*Vampires*/
          if(this.race ==="Vampires"){
            if(this.item ==="Boots"){
              this.currenthealth = this.currenthealth-1;
            }
            if(this.item ==="Staff"){
              this.currenthealth = this.currenthealth-1;
            }
            if(this.item ==="Sword"){
              this.currenthealth = this.currenthealth-1;
            }
            if(this.item ==="Bow"){
              this.currenthealth = this.currenthealth-1;
            }
   
          }


    };


    this.totalDamage = this.damage();

    this.random = function(min , max){
      {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    }


    
       





    this.displayChar = function () {
      return console.log(
        `I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`
      );
    };
  }
} /*End class*/

let nomP1;
let nomP2;
let raceP1;
let raceP2;
let itemP1;
let itemP2;
let zoneContainer = document.getElementById("zoneContainer");
let form = document.getElementById("form");
let P1 ;
let P2 ;


document.getElementById("reload").addEventListener('click',() => {
  window.location.reload();
  window.scrollTo(0,0);
});



document.getElementById("playBtn").addEventListener("click", () => {

  form.style.display = "none";
  zoneContainer.classList.add("show");
  
  nomP1 = document.getElementById("pseudoP1").value;


   P1 = new Person(raceP1, itemP1);

  nomP2 = document.getElementById("pseudoP2").value;
   P2 = new Person(raceP2, itemP2);


  document.getElementById("nom1").innerHTML = nomP1;
  document.getElementById("nom2").innerHTML = nomP2;
  document.getElementById("rc1").innerHTML = raceP1;
  document.getElementById("rc2").innerHTML = raceP2;
  document.getElementById("it1").innerHTML = itemP1;
  document.getElementById("it2").innerHTML = itemP2;
  
});

document.getElementById("raceP1").addEventListener("change", (event) => {
  raceP1 = event.target.value;
  document.getElementById("imgRaceP1").setAttribute("src", `./img/${event.target.value}.png`);
});

document.getElementById("itemP1").addEventListener("change", (event) => {
  itemP1 = event.target.value;

});

document.getElementById("raceP2").addEventListener("change", (event) => {
  raceP2 = event.target.value;
  document.getElementById("imgRaceP2").setAttribute("src", `./img/${event.target.value}.png`);
});

document.getElementById("itemP2").addEventListener("change", (event) => {
  itemP2 = event.target.value;
});
