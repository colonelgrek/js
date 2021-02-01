let upButton = document.querySelector('.up-button');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    upButton.classList.add('up-button__shown');
  } else {
    upButton.classList.remove('up-button__shown');
  }
});

upButton.addEventListener("click", () => window.scrollTo(0, 0));
