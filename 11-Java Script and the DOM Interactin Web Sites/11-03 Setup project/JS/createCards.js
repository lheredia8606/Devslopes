const cardArr = [
  {
    dataItem : 'web',
    imgUrl : './ASSETS/Images/portfolio-1.jpg',
    type: 'Web Development',
    site: 'Food Website'
  },
  {
    dataItem : 'web',
    imgUrl : './ASSETS/Images/portfolio-2.jpg',
    type: 'Web Development',
    site: 'Truck Website'
  },
  {
    dataItem : 'web',
    imgUrl : './ASSETS/Images/portfolio-3.jpg',
    type: 'Web Development',
    site: 'Shoes Website'
  },
  {
    dataItem : 'ui',
    imgUrl : './ASSETS/Images/portfolio-4.jpg',
    type: 'UI Development',
    site: 'Cell Website'
  },
  {
    dataItem : 'app',
    imgUrl : './ASSETS/Images/portfolio-5.jpg',
    type: 'App Development',
    site: 'TV Website'
  },
  {
    dataItem : 'app',
    imgUrl : './ASSETS/Images/portfolio-6.jpg',
    type: 'App Development',
    site: 'Laptop Website'
  },
  {
    dataItem : 'app',
    imgUrl : './ASSETS/Images/portfolio-7.jpg',
    type: 'App Development',
    site: 'Movile Website'
  },
  {
    dataItem : 'ui',
    imgUrl : './ASSETS/Images/portfolio-8.jpg',
    type: 'Ui Development',
    site: 'Food Website'
  },
];
const grid = document.querySelector('.portfolio-grid');
for (const card of cardArr) {
  divType = document.createElement('div');
  divType.innerHTML = card.type;
  site = document.createElement('h3');
  site.innerHTML = card.site;
  link = document.createElement('a');
  link.href = '#';
  link.classList.add('card-popup-box');
  link.appendChild(divType);
  link.appendChild(site);
  image = document.createElement('img');
  image.src = card.imgUrl;
  divCardBody = document.createElement('div');
  divCardBody.classList.add('card-body');
  divCardBody.appendChild(image);
  divCardBody.appendChild(link);
  divCard = document.createElement('div');
  divCard.classList.add('portfolio-card');
  divCard.dataset.item = card.dataItem;
  divCard.appendChild(divCardBody);
  grid.appendChild(divCard);
}

