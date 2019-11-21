var map = {}; // You could also use an array
    onkeydown = onkeyup = function(e){
        e = e || event; // to deal with IE
        map[e.keyCode] = e.type == 'keydown';
        /* insert conditional here */
      
        if(map[71] ){ // tab+g
          
          // toca áudio
          new Audio('https://www.myinstants.com/media/sounds/preview_3.mp3').play();
          
          // mostra gato
          
          map = {};
        }
      
    }