setTimeout(points, 100);

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