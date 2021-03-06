const cardButtons = document.querySelectorAll('.card button');
const modalOuter = document.querySelector('.modal-outer');
const modalInner = document.querySelector('.modal-inner');

function handleCardButtonClick(event) {
  const button = event.currentTarget;
  const card = button.closest('.card');
  // console.log(card);

  const imgSrc = card.querySelector('img').src;
  const cardDescription = card.dataset.description;
  const cardTitle = card.querySelector('h2').textContent;

  modalInner.innerHTML = `
    <img src="${imgSrc.replace(200, 600)}" alt=""/>
    <p>${cardDescription}</p>
  `;
  // console.log(modalOuter);
  modalOuter.classList.add('isOpen');
}

cardButtons.forEach(button => {
  button.addEventListener('click', handleCardButtonClick);
});

function closeModal() {
  modalOuter.classList.remove('isOpen');
}

modalOuter.addEventListener('click', function(event) {
  const isInside = !!event.target.closest('.modal-inner');
  console.log(isInside);
  if (!isInside) {
    closeModal();
  }
});

window.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});
