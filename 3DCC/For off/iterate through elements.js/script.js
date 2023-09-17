const heathers = document.querySelectorAll('h1');
for (const element of heathers) {
  console.log(element);
  element.addEventListener('click', function(){
    console.log(this.textContent);
  })
}
