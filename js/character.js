
function Person(race, item) {
  this.race = race;
  this.item = item;
  this.currenthealth = 100;
  this.maxHealth = 100;
  this.min = 3;
  this.maxDamage = 20;
  this.maxHealing = 30;
  this.heal = function () {};
  this.damage = function () {};
  this.totalDamage = this.damage();
  this.displayChar = function () {
    return console.log(
      `I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`
    );
  };
}

//Class1
class Humans extends Person {
  constructor(item) {
    super();
    this.race = "humans";
    this.item = item;

    this.damage = function (player2) {
      this.currenthealth = this.currenthealth - this.maxDamage * (20 / 100);
    };
    this.heal = function () {
      this.currenthealth = this.currenthealth + this.maxHealing;
      if (this.currenthealth > this.maxHealth) {
        this.currenthealth = this.maxHealth;
      }
    };
  }
}

class Orcs extends Person {
  constructor(item) {
    super();
    this.race = "Orcs";
    this.item = item;
    this.currenthealth =140;

    this.damage = function (player2) {
      this.currenthealth = this.currenthealth - this.maxDamage;
    };
    this.heal = function () {
      this.currenthealth = this.currenthealth + this.maxHealing * (40 / 100);
      if (this.currenthealth > this.maxHealth) {
        this.currenthealth = this.maxHealth;
      }
    };
  }
}

class Elves extends Person {
  constructor(item) {
    super();
    this.race = "Elves";
    this.item = item;

    this.damage = function (player2) {
      let random = Math.floor(Math.random()*10 +1);

      console.log(player2)
      console.log(random)
      if(random===2){
        player2.currenthealth = 0;
      }else{
        this.currenthealth = this.currenthealth - this.maxDamage
      }
    };
    this.heal = function () {
      this.currenthealth = this.currenthealth + this.maxHealing;
      if (this.currenthealth > this.maxHealth) {
        this.currenthealth = this.maxHealth;
      }
    };
  }
}

class Vampires extends Person {
  constructor(item) {
    super();
    this.race = "Vampires";
    this.item = item;

    this.damage = function (player2) {
     let random = Math.floor(Math.random()*10 +1);
     console.log(random)
   
     if(random<=3){
       player2.currenthealth = player2.currenthealth -this.maxDamage/2;
     }else{
       this.currenthealth = this.currenthealth - this.maxDamage
     }
    };
    this.heal = function () {
      this.currenthealth = this.currenthealth + this.maxHealing;
      if (this.currenthealth > this.maxHealth) {
        this.currenthealth = this.maxHealth;
      }
    };
  }
}

export { Person, Orcs, Humans, Vampires, Elves };












document.getElementById("reload").addEventListener('click',() => {
  window.location.reload();
  window.scrollTo(0,0);
});


