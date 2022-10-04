setTimeout(points, 1);
setTimeout(background, 1);

function points()
{
    let a=0;
    let b=0;

    for(var m=0;m<10;m++){
        
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



function background()
{

    let number=0;
    setInterval(appear, 40);
    function appear()
    {

        const str=document.getElementById("bgstars");
        var rect=str.getBoundingClientRect();
        var x=rect.top;
        x++;
        document.getElementById("bgstars").style.top=x;
        
        if(number<=20){
            points();
        }

        if(x==100)
        {
            x--;
        }

        number++;
    }

}