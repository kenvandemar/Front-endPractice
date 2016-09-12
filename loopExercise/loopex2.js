
var guestList =  ['Manila', 'Ken', 'Hashi', 'Phil', 'LoLa', 'Takashi', 'Arina', 'Like', 'Sam'];

var admitted   = document.querySelector('.admitted');
var refused    = document.querySelector('.refused');
var console1    = document.querySelector('.console1');

for (var i = 0; i < guestList.length; i++){
  if(guestList[i] === 'Phil' || guestList[i] === 'LoLa'){
        refused.textContent += guestList[i] + ', ';
          
    } else {
        admitted.textContent += guestList[i] + ', ';
    };
}
refused.textContent.slice(0, refused.textContent.length - 2) +  '.';
admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length - 2) + '.';