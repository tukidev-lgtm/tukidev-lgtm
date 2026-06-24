  // Permitir activar el "descosido" de las cards con teclado (Enter/Espacio), no solo hover
  document.querySelectorAll('.card').forEach(function(card){
    card.addEventListener('keydown', function(e){
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        card.classList.toggle('kb-open');
        var cover = card.querySelector('.patch-cover');
        if(card.classList.contains('kb-open')){
          cover.style.transform = 'translateY(-8%) rotate(-3deg) scale(1.06)';
          cover.style.opacity = '0';
        } else {
          cover.style.transform = '';
          cover.style.opacity = '';
        }
      }
    });
  });