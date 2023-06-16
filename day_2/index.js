const sec_div=document.getElementById("sec");
const hour_div=document.getElementById("hour");
const min_div=document.getElementById("min");
function start(){
    var x= new Date();
var hour=x.getHours(); 
var min =x.getMinutes(); 
var sec=x.getSeconds();
    if(hour>12){
        hour-=12;
    }
    var hour_rotation=hour*30+90;
    var min_rotation=min*6+90;
    var sec_rotation=sec*6+90;
    // console.log(hour_rotation," ",min_rotation," ",sec_rotation);
    // console.log(hour," ",min," ",sec);
    sec_div.style.transform=`rotate(${hour_rotation}deg)`;
    min_div.style.transform=`rotate(${min_rotation}deg)`;
    hour_div.style.transform=`rotate(${sec_rotation}deg)`;


}
setInterval(start,1000);
