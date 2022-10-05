const canvas1 = document.getElementById('canvas1');
const ctx = canvas1.getContext('2d');
const CANVAS_WIDTH = canvas1.width = 1100;
const CANVAS_HEIGHT = canvas1.Height = 500;

let gamespeed = 1;

function fast(){
    gamespeed++;
}
function slow(){
    if(gamespeed==0){}
    else gamespeed--;
}

const background = new Image();
background.src = 'Resources/BgVector.png';

let x=0;
let x2=1028;

function ImageLoop(){
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
    requestAnimationFrame(ImageLoop);
}
ImageLoop();

const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');
const CANVAS_WIDTH2 = canvas2.width = 1100;
const CANVAS_HEIGHT2 = canvas2.Height = 500;

const cloudek = new Image();
cloudek.src = 'Resources/cloudtwo.png';

const clouddo = new Image();
clouddo.src = 'Resources/cloudthree.png';


let d=0;
let d2=1171;

function CloudLoop(){
    ctx2.clearRect(0, 0, CANVAS_WIDTH2, CANVAS_HEIGHT2);
    ctx2.drawImage(cloudek, d, 0);
    ctx2.drawImage(clouddo, d2, 0);
    if(d<-1171) 
    d=1171 - 0.5;
    else
    d -= 0.5;
    if(d2<-1928) 
    d2=1928 - 0.5;
    else
    d2 -= 0.5;
    requestAnimationFrame(CloudLoop);
}
CloudLoop();

function batmcar()
{
    var car = documnet.getElementById("Batcar");
    var BCar = car.getBoundingClientRect();
    var x = 0;
    var id = setInterval(animateb, 5);
    function animateb(){
        if(x==250){
            clearInterval(id);
        }
        else{
            x++;
            BCar.style.top = x + "%";
            BCar.style.left = x + "%";
        }
    }
}

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