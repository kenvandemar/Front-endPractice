
var doSomething = function(work){
    console.log(work);
    console.log(this.benchPress);   
}
doSomething("pushUp");
var exercise = {benchPress: "4 sets", squats: "2 sets"}
doSomething.call(exercise, exercise.squats);
doSomething.apply(exercise, ['crunchess']);


function multiplier(){
    var result = 1;
    for (var i = arguments.length - 1; i >= 0; i--){
        result *= arguments[i];
    }
    return result;
}

console.log(multiplier(2,5,8,6));