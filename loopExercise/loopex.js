 var output = document.querySelector('.output');
    output.innerHTML = '';

for (var i = 10; i >= 0; i--){
   
    var para = document.createElement('p');
    

    if(i === 10){
        para.textContent = 'Countdown ' + i;
    } else if (i === 0){
        para.textContent = 'Blast off!';
    } else {
        para.textContent = 'The number is ' + i;
    }
    
    output.appendChild(para);
}