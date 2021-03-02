'use strict'
let likesButtons = document.querySelectorAll('.like');

for (let likesButton of likesButtons) {
  likesButton.addEventListener("click", () => {
    if (likesButton.classList.contains('like__active')) {
      likesButton.lastChild.textContent--;
    } else {
      likesButton.lastChild.textContent++;
    }
    likesButton.classList.toggle('like__active');
  })
}
