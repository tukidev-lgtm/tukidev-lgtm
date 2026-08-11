
  document.querySelectorAll('.card').forEach(function(card){
    card.addEventListener('keydown', function(e){
      const cover = card.querySelector('.patch-cover');
      if(!cover) return;
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        card.classList.toggle('kb-open');
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