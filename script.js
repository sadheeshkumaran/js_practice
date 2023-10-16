const showModalBtns = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

showModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
});

document.querySelector('.close-modal').addEventListener('click', () => {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
});
