var greeting = "";
var highScore = 2;
var myScore = "554";

//Loop on to Harley Bikes

var harleys = ["street750", "fatBody", "StreetBoy", "StreetGlide", "Ironic883"];

//greeting += harleys[0] + "<br>";
//greeting += harleys[1] + "<br>";
//greeting += harleys[2] + "<br>";
//greeting += harleys[3] + "<br>";
//greeting += harleys[4] + "<br>";
//greeting += harleys[5] + "<br>";

var i=0;
//for (i = 0; i <= harleys.length; i += 1) 
//    greeting += harleys[i] + "<br>";
//for (i in harleys) {
//    greeting += harleys[i] + "<br>";
//}

while (i <= harleys.length){
    greeting += harleys[i] + "<br>";
    i++;
}


document.getElementById("test").innerHTML = greeting;








