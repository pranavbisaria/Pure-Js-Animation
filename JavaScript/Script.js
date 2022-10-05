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

function points()
{
    var a=0;
    var b=0;
    
    for(var n=0; n<250; n++){
        
        var st=document.getElementById("bgstars");
        let circle=document.createElementNS("http://www.w3.org/2000/svg", "circle");

        a=Math.floor(Math.random()*window.innerWidth);
        b=Math.floor(Math.random()*window.innerHeight);
        
        circle.setAttribute("cx", a);
        circle.setAttribute("cy", b);
        circle.setAttribute("r",  1);
        circle.setAttribute("fill", "white");
        st.appendChild(circle);
        
    }
    
}

setTimeout(points, 100);