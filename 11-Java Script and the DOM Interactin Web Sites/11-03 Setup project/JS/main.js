const modalOpen = '[data-open]';
const modalClose = '[data-close]';

const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

for (const elm of openModal) {
  elm.addEventListener("click", function (){
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add('is-visible');
  });
}

for (const elm of closeModal) {
  elm.addEventListener("click",function (){
    const modalID = this.dataset.close;
    document.getElementById(modalID).classList.remove('is-visible');
  });
}
