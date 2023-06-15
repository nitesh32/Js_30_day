document.body.addEventListener('keypress',function(event){
    var code =event.keyCode;
    console.log(code);
    var audioelement=document.querySelectorAll(`audio[data-key="${code}"]`);
    if(audioelement){
    audioelement[0].play();
    }
    else{
        return;
    }
    var divelement=document.querySelectorAll(`div[data-key="${code}"]`);
    if(divelement){
        console.log(divelement[0]);
        divelement[0].classList.toggle("active");
        setTimeout(function(){
            divelement[0].classList.toggle("active");
        },100);
    }
    else{
        return;
    }
    
});
