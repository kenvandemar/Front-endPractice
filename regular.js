var str = "apple APPPLE ApPle apPle aPPLE APPle";
var txt = str.replace(/([A-Z])\w+/ig, "google");

document.getElementById("test").innerHTML = txt;

//http://www.regexpal.com/