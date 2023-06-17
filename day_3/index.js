var elements = document.querySelectorAll(".controls input");
function gotohere(){
    var val=this.dataset.sizing||' ';
    document.documentElement.style.setProperty(`--${this.name}`,this.value+val);
}
elements.forEach(input=>input.addEventListener('change',gotohere));
elements.forEach(input=>input.addEventListener('mousemove',gotohere));
