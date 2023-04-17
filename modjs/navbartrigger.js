var btn = document.getElementById('btn');
var total = 0;
btn.addEventListener('click', function(){
  total++;

    if(total === 1){
      $("nav .container-fluid").css("background-color","white");
      console.log(total);
    }
    else if( total === 2){
      total = 0;
      $("nav .container-fluid").css("background-color",""); 
      console.log(total);
    }
});
