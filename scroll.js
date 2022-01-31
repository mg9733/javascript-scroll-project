let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountains3");
let mountain2 = document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let mg = document.querySelector(".mg");


window.onscroll = function(){
    let value = scrollY
    stars.style.left = value + 'px' 
    moon.style.top = value * 4 + "px"
    mountain.style.top = value * 2 + "px"
    mountain2.style.top = value * 1.5 + "px"
    river.style.top = value + "px"
    boat.style.top = value + "px"
    boat.style.left = value * 3 + "px"
    mg.style.fontSize = value + "px"
    
    if(scrollY>=170) {
         mg.style.fontSize = 170 + "px" ;
         mg.style.position = "fixed" ;

        if (scrollY>=580)  { 
            mg.style.display = "none"; 
        }else{
            mg.style.display = "block"; 
        }


        if(scrollY>=140) {
            document.querySelector(".main").style.background = "linear-gradient(#000008,#6c7fcc)";
        }else{
            document.querySelector(".main").style.background = "linear-gradient(#000000 50%,#931e5f)";

        }
       
    }
}
    
