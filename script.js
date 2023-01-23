$(document).ready(function(){
    $("a").hover(hoverIn, hoverOut);
    $("a").click(clickAction);
})

function animatedIn(){
    console.log("animated in!");
}
function animatedOut(){
    console.log("animated out!");
}

function clickAction(e){
    e.preventDefault();
    console.log("ouch!");
}

function hoverIn(){
    console.log("I know.  I'm hovering, sooooorrryyyy!");
    $("#info>p:nth-child(1)").animate({left:"10px", opacity: 1, fontSize: "4em", color:"#090"},750,"easeInOutBounce",animatedIn)
        .delay(3000).animate({color:"#009"},250)
        .animate({color:"#0f0"},400);
    $("#info>p:nth-child(2)").delay(1000).animate({top: "280px", opacity: 1, fontSize:"4em", color: "#090"},1000, "easeInOutBack", animatedIn)
        .delay(250).animate({color:"#0f0"},400); 
}
function hoverOut(){
    console.log("I get the hint!  Not hovering anymore!");
    $("#info>p:nth-child(1)").animate({left:"-350px", opacity: 0, fontSize: "8em", color:"#000"},750,"easeOutElastic",animatedOut)
    $("#info>p:nth-child(2)").animate({top: "420px", opacity: 0, fontSize: "8em", color:"#000"},1000, "easeOutBounce", animatedOut);
}