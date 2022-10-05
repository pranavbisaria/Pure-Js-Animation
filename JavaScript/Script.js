const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 1100;
const CANVAS_HEIGHT = canvas.Height = 500;
const slider = document.getElementById('slider');

let gamespeed = 1;

const background = new Image();
background.src = 'Resources/BgVector.png';

let x=0;
let x2=1028;
function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    ctx.drawImage(background, x, 0);
    ctx.drawImage(background, x2, 0);
    if(x<-1028) 
    x=1028 -gamespeed;
    else
    x -= gamespeed;
    if(x2<-1028) 
    x2=1028 - gamespeed;
    else
    x2 -= gamespeed;
    requestAnimationFrame(animate);
}
animate();

setTimeout(points, 100);