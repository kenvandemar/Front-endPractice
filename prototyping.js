

var walk = function() {
    return("He is able to walk");
}

var superHero = function(){
    var power, villian;
}

superHero.prototype.walk = walk;

peterKen = new superHero();
peterKen.power = "break the window";
peterKen.villian = "Green Pea";
peterKen.walk();

console.log(peterKen.walk());

claKen = new superHero();
claKen.power = "Fly";
claKen.villian = "Moon Stuff";

console.log(claKen.villian);


// document.getElementById("test").innerHTML = harley.shoutOuts;