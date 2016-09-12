// var contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
 var para = document.querySelector('p');
 var input = document.querySelector('input');
var btn = document.querySelector('button');

// btn.addEventListener('click', function(){
//     var searchName = input.value;
//     input.value = '';
//     input.focus();

//     for(var i = 0; i < contacts.length; i++){
//         var splitContact = contacts[i].split(':');
//         if(splitContact[0] === searchName){
//             para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
//             break;
//         } else {
//             para.textContent = 'I\'m sorry! The contact you\'r looking for is not found';
//         }
//     }    
// });



btn.addEventListener('click', function(){
    var num = input.value;
        input.value = '';
        input.focus();
        

        if (isNaN(num))
            para.textContent =  "Only number is allowed";
        if (num === "") 
            para.context = "Please choose a number";

        for (var i = 1; i <= num; i++){
            var sqRoot = Math.sqrt(i);
        if(Math.floor(sqRoot) !== sqRoot){
        continue;
            }
            para.textContent += i + ' ';
        }
        

});

