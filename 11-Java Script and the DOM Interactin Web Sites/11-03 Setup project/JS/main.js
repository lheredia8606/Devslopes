const theme = 'theme';
const dataTheme = 'data-theme';
const dark = 'dark';
const light = 'light';
const open = 'open';
const active = 'active';
const root = document.documentElement;
const isVisible = 'is-visible';

/* modal */
const modalOpen = '[data-open]';
const modalClose = '[data-close]';
const openModal = document.querySelectorAll(modalOpen);
const closeModal = document.querySelectorAll(modalClose);

/*Portfolio */
const dataFilter = '[data-filter]';
const portfolioData = '[data-item]';
const filterLink = document.querySelectorAll(dataFilter);
const portfolioItems = document.querySelectorAll(portfolioData);
const searchBox = document.querySelector('#search');

/*theme*/
const themeTab = '.theme-tab';
const switcherBtn = '.switcher-btn';
const toggleTheme = document.querySelector(themeTab);
const switcher = document.querySelectorAll(switcherBtn);
initializeTheme();

function getCurrentTheme(){
  const currentTheme = localStorage.getItem(theme);
  return currentTheme ? currentTheme : light;
}

function initializeTheme(){
  const currentTheme = getCurrentTheme();
  root.setAttribute(dataTheme, currentTheme);
  setBtnActive(currentTheme);
}

function setBtnActive(currentTheme){
  firstElement = Array.from(switcher)[0];
  if(!(firstElement.className.includes('active')
  && firstElement.dataset.toggle === currentTheme)){
    for (const element of switcher) {
      setActive(element);
    }
  }
}

const setTheme = function(currTheme){
  if(currTheme === light){
    root.setAttribute(dataTheme, dark);
    localStorage.setItem(theme, dark);
  }else{
    root.setAttribute(dataTheme, light);
    localStorage.setItem(theme, light);
  }
}

function setActive(elm){
  if(elm.className.includes(active)){
    elm.classList.remove(active);
  } else{
    elm.classList.add(active);
  }
}

function switchActive(elm, selector){
  if(document.querySelector(`.${selector}.${active}`)!==null){
    document.querySelector(`.${selector}.${active}`).classList.remove(active);
  }
  elm.classList.add(active);
}

for (const elm of switcher) {
  elm.addEventListener('click', function(){
    if(!elm.className.includes(active)){
      for (const btn of switcher) {
        setActive(btn);
      }
      const currTheme = root.getAttribute(dataTheme);
      setTheme(currTheme);
    }
  });
}

toggleTheme.addEventListener('click', function(){
  const element = this.parentElement.parentElement;
  if(element.className.includes(open)){
    element.classList.remove(open);
  } else {
    element.classList.add(open);
  }
});


/*Portfolio */
for (const link of filterLink) {
  link.addEventListener("click",function(){
  switchActive(link, 'filter-link');
  const filter = this.dataset.filter;
  portfolioItems.forEach((item)=>{
    if (filter === 'all'){
      item.style.display = 'block';
    }else if(filter === item.dataset.item){
      item.style.display = 'block';
    }else {
      item.style.display = 'none';
    }
  });
  });
}

searchBox.addEventListener('keyup', (item)=>{
  itemValue = item.target.value.toLowerCase().trim();
  console.log(itemValue);
  portfolioItems.forEach((portfolioItem)=>{
    if(portfolioItem.dataset.item.includes(itemValue)){
      portfolioItem.style.display = 'block';
    }
    else{
      portfolioItem.style.display = 'none';
    }
  });
});

//   Modal/full Site Modal "opn buttons"
for (const elm of openModal) {
  elm.addEventListener("click", function (){
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const elm of closeModal) {
  elm.addEventListener("click",function (){
    const modalID = this.dataset.close;
    document.getElementById(modalID).classList.remove(isVisible);
  });
}

document.addEventListener('click', (e)=>{
  if(e.target === document.querySelector(`.modal.${isVisible}`)){
    document.querySelector(`.modal.${isVisible}`).classList.remove(isVisible);
  }
});

document.addEventListener('keyup', (e)=>{
  if(e.key === 'Escape' && document.querySelector(`.modal.${isVisible}`)){
    document.querySelector(`.modal.${isVisible}`).classList.remove(isVisible);
  }
});
