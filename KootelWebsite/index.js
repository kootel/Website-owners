window.onload = function() {
    const pasek = document.getElementById('pasek2');
    const progress = document.getElementById('progress');
    
    pasek.addEventListener('animationiteration', (event) => {
      console.log('Animacja pasek się zakończyła');
      
      progress.style.animation = 'slideOutLeft 2s forwards';
    });

    progress.addEventListener('animationend', (event) => {
      if (event.animationName === 'slideOutLeft') {
        console.log('Animacja slideOutLeft zakończona');
        progress.style.display = 'none';
      }
    });

    setTimeout(function(){
        document.getElementById('pasek2').style.display = 'none';
        document.getElementById('pasek').style.display = 'none';
        document.getElementById('progress').style.display = 'none';
    }, 5000);
};
