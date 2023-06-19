function myfunc() {
    var data = document.getElementById("input").value;
    // console.log(data);
    doit(data,0,0,0,0,0,0);
  }
  var aa=0,ab=0,ac=0,ad=0;
  
  function doit(n,all,a,b,c,d,e) {
      
    var id = setInterval(function () {
      document.getElementById("screen5").innerHTML = a;
      if(aa==1){
          var t=40;
              var ni=setInterval(function(){
          
                  if(t<1){
                      clearInterval(ni);
                      return;
                  }
                  document.getElementById("screen4").style.top=t +"px";
                  t--;
              },8);
          aa=0;
      }
      document.getElementById("screen4").innerHTML = b;
      if(ab==1){
          var t=40;
              var ni=setInterval(function(){
          
                  if(t<1){
                      clearInterval(ni);
                      return;
                  }
                  document.getElementById("screen3").style.top=t +"px";
                  t--;
              },8);
          ab=0;
      }
      document.getElementById("screen3").innerHTML = c;
      if(ac==1){
          var t=40;
              var ni=setInterval(function(){
          
                  if(t<1){
                      clearInterval(ni);
                      return;
                  }
                  document.getElementById("screen2").style.top=t +"px";
                  t--;
              },8);
          ac=0;
      }
      document.getElementById("screen2").innerHTML = d;
      if(ad==1){
          var t=40;
              var ni=setInterval(function(){
          
                  if(t<1){
                      clearInterval(ni);
                      return;
                  }
                  document.getElementById("screen1").style.top=t +"px";
                  t--;
              },8);
          ad=0;
      }
      document.getElementById("screen1").innerHTML = e;
      var t=40;
              var ni=setInterval(function(){
          
                  if(t<1){
                      clearInterval(ni);
                      return;
                  }
                  document.getElementById("screen5").style.top=t +"px";
                  t--;
              },8);
      ++a;
      all++;
      if (a == 10) {
        b++;
        aa=1;
        a=0;
      }
      if (b > 9) {
        c++;
        ab=0;
        b = 0;
      }
      if (c > 9) {
        d++;
        ac=1;
        c = 0;
      }
      if (d > 9) {
        e++;
        ad=1;
        d = 0;
      }
      //console.log(n);
      if (all > n) {
        clearInterval(id);
        return;
      }
    }, 800);
  }