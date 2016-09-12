//try catch
//try{
//    aleert("Hello user");
//} catch(err){
//    document.getElementById("test").innerHTML = err.message;
//}

function myError() {
    
    var msg, x;
    
    msg = document.getElementById("msg");
    msg.innerHTML = "";
    
    x = document.getElementById("some").value;
    
    try {
        
        if (x == "") throw "Please choose a number";
        if (isNaN(x)) throw "Only number is allowed";
        if (x < 4) throw "Please choose a number greater than 3";
    } catch(err){
        msg.innerHTML = "Error is " + err;
    } finally {
        document.getElementById("msg").innerHTML = "You are good to go";
    }
}
