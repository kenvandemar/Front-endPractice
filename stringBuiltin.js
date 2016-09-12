//string function
var sampleString = "Let\'s get started our journey with Javascript";
console.log(sampleString.indexOf('start'));
console.log(sampleString.lastIndexOf('start'));
console.log(sampleString.slice(5, 11));


//substring(start, end) --> cannot accept negative indexes
//substr(start, end)    --> second parameters sepecifies the length of extracted part


console.log(sampleString.replace("journey", "Adventure"));
console.log(sampleString.toLowerCase());
console.log(sampleString.toUpperCase());


var name1 = "Kevin";
var name2 = new String("Kevin");

if(name1 === name2){
    console.log("True");
} else {
    console.log("False");
}