var btn = document.getElementById('btn');
var total = 0;
btn.addEventListener('click', function(){
  total++;

    if(total === 1){
      $(".container").css("background-color","white");
      console.log(total);
    }
    else if( total === 2){
      total = 0;
      $(".container").css("background-color",""); 
      console.log(total);
    }
});
