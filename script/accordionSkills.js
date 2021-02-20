let skillsButtons = document.querySelectorAll('.skills__button');
let occupiedItem;

for (let skillsButton of skillsButtons) {
  skillsButton.addEventListener("click", () => {
    skillsButton.nextElementSibling.classList.toggle('hidden');
    skillsButton.parentElement.classList.toggle('skills__item--background');
    if (occupiedItem) {
      occupiedItem.classList.add('hidden');
      occupiedItem.parentElement.classList.remove('skills__item--background');
    }
    occupiedItem = (occupiedItem === skillsButton.nextElementSibling) ? 0 : skillsButton.nextElementSibling;
  })
}
