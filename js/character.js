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

        this.heal = function () { };

        this.damage = function () { };

        this.totalDamage = this.damage();

        this.displayChar = function () {
            return console.log(`I am a ${this.race}, I wield a ${this.item}, my total health point are ${this.maxHealth}`);
        };
    }
}

let nomP1;
let nomP2;
let raceP1;
let raceP2;
let itemP1;
let itemP2;

document.getElementById("playBtn").addEventListener("click", () => {
    if(nomP1 === undefined) {
        alert("fqgf");
    }
    nomP1 = document.getElementById("pseudoP1").value;
    console.log("nomP1 = " + nomP1);
    console.log("raceP1 = " + raceP1);
    console.log("itemP1 = " + itemP1)
    
    let P1 = new Person(raceP1, itemP1);
    console.log ("this raceP1 = " + P1.race);
    console.log ("this itemP1 = " + P1.item);

    nomP2 = document.getElementById("pseudoP2").value;
    console.log("nomP2 = " + nomP2);
    console.log("raceP2 = " + raceP2);
    console.log("itemP2 = " + itemP2)
    
    let P2 = new Person(raceP2, itemP2);
    console.log ("this raceP2 = " + P2.race);
    console.log ("this itemP2 = " + P2.item);

    document.getElementById("nom1").innerHTML = nomP1;
    document.getElementById("nom2").innerHTML = nomP2;
    document.getElementById("rc1").innerHTML = raceP1;
    document.getElementById("rc2").innerHTML = raceP2;
    document.getElementById("it1").innerHTML = itemP1;
    document.getElementById("it2").innerHTML = itemP2;

});

document.getElementById("raceP1").addEventListener("change", (event) => {
    raceP1 = event.target.value;
});

document.getElementById("itemP1").addEventListener("change", (event) => {
    itemP1 = event.target.value;
});

document.getElementById("raceP2").addEventListener("change", (event) => {
    raceP2 = event.target.value;
});

document.getElementById("itemP2").addEventListener("change", (event) => {
    itemP2 = event.target.value;
});
