const toggleButton = document.querySelector('.toggle-button-container');
const [leftCircle, rightCircle] = document.querySelectorAll('.circle');

toggleButton.addEventListener('click', () => {
  const isActive = toggleButton.classList.toggle('active');

  leftCircle.classList.toggle('appear', isActive);
  rightCircle.classList.toggle('appear', !isActive);
});
