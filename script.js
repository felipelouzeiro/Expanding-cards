const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    
    // adiciona a class active na div clicada
    panel.classList.add('active');
  })
})

// remove todas as class active
function removeActiveClasses() {
  panels.forEach(panel => {
    panel.classList.remove('active');
  })
}