setTimeout(points, 100);
setTimeout(background, 100);

function points()
{
    var a=0;
    var b=0;

    for(var n=0; n<10; n++){
        
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