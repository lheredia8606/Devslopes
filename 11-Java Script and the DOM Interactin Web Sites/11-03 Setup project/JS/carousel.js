const carouselItems = document.querySelectorAll('.review-item');
const buttons = document.querySelectorAll('.slide-ctrl-container button');
let current = Math.floor(Math.random() * carouselItems.length);
let next = getNext(current);
let previous = getPrevious(current);
updateCssClasses(current);

function getNext(current){
  return current < carouselItems.length -1 ? current + 1 : 0;
}

function getPrevious(current){
  return current > 0 ? current - 1 : carouselItems.length - 1;
}

function updateCssClasses(){
  for (const item of carouselItems) {
    item.classList.remove('active', 'previous', 'next');
  }
  carouselItems[current].classList.add('active');
  carouselItems[this.getPrevious(current)].classList.add('previous');
  carouselItems[this.getNext(current)].classList.add('next');
}

buttons[0].addEventListener('click', () => {
  current = getPrevious(current);
  updateCssClasses();
});

buttons[1].addEventListener('click', function(){
  current = getNext(current);
  updateCssClasses();
});