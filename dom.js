
// var newList = document.createElement("li");
// newList.innerHTML = "I was added by JS";

// document.getElementById("change").appendChild(newList);

// document.getElementById("test").innerHTML = "Changed the text";

// document.getElementById("iddd").setAttribute()

function myFunction(){
    var x = document.forms["myForm"];
    var text = "";
    for(var i=0; i < x.length; i++){
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("getValue").innerHTML = text;
}

