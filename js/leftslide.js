/**
 * Created by YEKTA on 9/13/2016.
 */
var leftslides = 0;
function plusleftslide(m){
    leftslides += m;
    var x=document.getElementById("wideslide");
    var slide = document.getElementsByClassName("smslidecontent");
    var dotleft = document.getElementsByClassName("leftdot");
    if (leftslides > (slide.length-1)) {leftslides = 0}
    if (leftslides < 0) {leftslides = (slide.length-1)}
    var leftpx= 203*leftslides;
    var leftdot = leftslides;
     x.style.left = leftpx + 'px';
}
setInterval(plusleftslide, 4000,1);

var leftbigslides = 0;
function plusleftbigslide(m){
    leftbigslides += m;
    var x=document.getElementById("wideslide");
    var slide = document.getElementsByClassName("smslidecontent");
    if (leftbigslides > (slide.length-1)) {leftbigslides = 0}
    if (leftbigslides < 0) {leftbigslides = (slide.length-1)}
    var leftpx= 203*leftbigslides;
    var leftdot = leftbigslides;
    x.style.left = leftpx + 'px';
}
setInterval(plusleftbigslide, 4000,1);

