var getImage = document.getElementById('image');
var count = 0;
var countr = 0;

window.onkeydown = function(keyWindow){ 
    if(keyWindow.keyCode === 38){
getImage.src = 'https://www.fightersgeneration.com/characters3/spider-sting.gif'  
setTimeout(() => {
    getImage.src = 'https://www.fightersgeneration.com/characters3/m-spiderman.gif'
}, 2400);
}
else if(keyWindow.keyCode === 39){
getImage.src = 'https://www.fightersgeneration.com/characters3/spidey-walk1.gif'
count = count+50
getImage.style.marginLeft = count+'px'
setTimeout(() => {
    getImage.src = 'https://www.fightersgeneration.com/characters3/m-spiderman.gif'
}, 100);
}

else if (keyWindow.keyCode === 37){
getImage.src = 'https://www.fightersgeneration.com/characters3/spidey-doyourjob.gif'
countr = countr+50
// count = count-50
console.log(countr)
getImage.style.right = countr+'px'
setTimeout(() => {
    getImage.src = 'https://www.fightersgeneration.com/characters3/m-spiderman.gif'
}, 400);
}

else  if (keyWindow.keyCode === 40){
    getImage.src = 'https://www.fightersgeneration.com/characters3/m-spiderman.gif'
    setTimeout(() => {
        getImage.src = 'https://www.fightersgeneration.com/characters3/m-spiderman.gif'
    }, 300);
    }
}
function Game(){
    getImage.src = 'https://www.fightersgeneration.com/characters3/spidey-maxspider.gif'
setTimeout(() => {
    getImage.src = 'https://www.fightersgeneration.com/characters3/m-spiderman.gif'
}, 7000);
}
function Game1(){
    getImage.src = 'https://www.fightersgeneration.com/characters3/spidey-throwcap.gif'
setTimeout(() => {
    getImage.src = 'https://www.fightersgeneration.com/characters3/m-spiderman.gif'
}, 2000);
}