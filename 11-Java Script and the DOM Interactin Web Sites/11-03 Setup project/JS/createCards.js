const cardArr = [
  {
    dataItem : 'web',
    imgUrl : './ASSETS/Images/portfolio-1.jpg',
    type: 'Web Development',
    site: 'Food Website',
    modalId: 'modal-1',
    descripton : 'My first awesome website',
    paragraf1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.',
    paragraf2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.'
  },
  {
    dataItem : 'web',
    imgUrl : './ASSETS/Images/portfolio-2.jpg',
    type: 'Web Development',
    site: 'Truck Website',
    modalId: 'modal-2',
    descripton : 'My first awesome website',
    paragraf1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.',
    paragraf2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.'
  },
  {
    dataItem : 'web',
    imgUrl : './ASSETS/Images/portfolio-3.jpg',
    type: 'Web Development',
    site: 'Shoes Website',
    modalId: 'modal-3',
    descripton : 'My first awesome website',
    paragraf1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.',
    paragraf2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.'
  },
  {
    dataItem : 'ui',
    imgUrl : './ASSETS/Images/portfolio-4.jpg',
    type: 'UI Development',
    site: 'Cell Website',
    modalId: 'modal-4',
    descripton : 'My first awesome website',
    paragraf1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.',
    paragraf2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.'
  },
  {
    dataItem : 'app',
    imgUrl : './ASSETS/Images/portfolio-5.jpg',
    type: 'App Development',
    site: 'TV Website',
    modalId: 'modal-5',
    descripton : 'My first awesome website',
    paragraf1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.',
    paragraf2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.'
  },
  {
    dataItem : 'app',
    imgUrl : './ASSETS/Images/portfolio-6.jpg',
    type: 'App Development',
    site: 'Laptop Website',
    modalId: 'modal-6',
    descripton : 'My first awesome website',
    paragraf1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.',
    paragraf2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.'
  },
  {
    dataItem : 'app',
    imgUrl : './ASSETS/Images/portfolio-7.jpg',
    type: 'App Development',
    site: 'Movile Website',
    modalId: 'modal-7',
    descripton : 'My first awesome website',
    paragraf1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.',
    paragraf2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.'
  },
  {
    dataItem : 'ui',
    imgUrl : './ASSETS/Images/portfolio-8.jpg',
    type: 'Ui Development',
    site: 'Food Website',
    modalId: 'modal-8',
    descripton : 'My first awesome website',
    paragraf1: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.',
    paragraf2: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis odio quae aut repudiandae quidem porro.'
  },
];
const grid = document.querySelector('.portfolio-grid');
for (const card of cardArr) {
  const cardElement = createHTMLCard(card);
  cardElement.addEventListener('click', function(){
    const popUpContainer = document.querySelector('.pop-up-container');
    popUpContainer.addEventListener
    popUpContainer.appendChild(createHTMLPopPup(card));
  });
  grid.appendChild(cardElement);
}

function deleteElement(element){
  element.remove();
}

function createHTMLCard(card){
  divType = document.createElement('div');
  divType.innerHTML = card.type;
  site = document.createElement('h3');
  site.innerHTML = card.site;
  link = document.createElement('div');
  link.classList.add('card-popup-box');
  link.appendChild(divType);
  link.appendChild(site);
  image = document.createElement('img');
  image.src = card.imgUrl;
  image.alt = 'Some Description Text';
  divCardBody = document.createElement('div');
  divCardBody.classList.add('card-body');
  divCardBody.appendChild(image);
  divCardBody.appendChild(link);
  divCard = document.createElement('div');
  divCard.classList.add('portfolio-card');
  divCard.dataset.item = card.dataItem;
  divCard.dataset.open = card.modalId;
  divCard.appendChild(divCardBody);
  return divCard;
}

function createHTMLPopPup(card){
  const stParagrat = document.createElement('strong');
  stParagrat.innerHTML = card.descripton;
  const pheader = document.createElement('p');
  pheader.appendChild(stParagrat);
  const paragraf1 = document.createElement('p');
  const paragraf2 = document.createElement('p');
  paragraf1.innerHTML = card.paragraf1;
  paragraf2.innerHTML = card.paragraf2;
  const divtwrapper = document.createElement('div');
  divtwrapper.classList.add('text-wrapper');
  divtwrapper.appendChild(pheader);
  divtwrapper.appendChild(paragraf1);
  divtwrapper.appendChild(paragraf2);
  const image = document.createElement('img');
  image.src = card.imgUrl;
  image.alt = 'Some descriptive text';
  const divimgwrapper = document.createElement('div');
  divimgwrapper.classList.add('img-wrapper');
  divimgwrapper.appendChild(image);
  const divModalBody = document.createElement('div');
  divModalBody.classList.add('modal-body');
  divModalBody.appendChild(divimgwrapper);
  divModalBody.appendChild(divtwrapper);
  const h3 = document.createElement('h3');
  h3.innerHTML = card.site;
  const closeIcon = document.createElement('i');
  closeIcon.classList.add('fas');
  closeIcon.classList.add('fa-times');
  closeIcon.dataset.close = card.modalId;
  closeIcon.addEventListener('click', function(){
    document.getElementById(card.modalId).classList.remove(isVisible);
    const elementToDelete =  document.getElementById(card.modalId);
    setTimeout(deleteElement(elementToDelete),10000);
  });
  const modalHeader = document.createElement('header');
  modalHeader.classList.add('modal-header');
  modalHeader.appendChild(h3);
  modalHeader.appendChild(closeIcon);
  const divModalDialog = document.createElement('div');
  divModalDialog.classList.add('modal-dialog');
  divModalDialog.appendChild(modalHeader);
  divModalDialog.appendChild(divModalBody);
  const divModal = document.createElement('div');
  divModal.id = card.modalId;
  divModal.classList.add('modal');
  divModal.dataset.animation = 'slideInOutTop';
  divModal.appendChild(divModalDialog);
  return divModal;
}

