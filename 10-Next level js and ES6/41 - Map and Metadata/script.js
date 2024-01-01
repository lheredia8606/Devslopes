const headerMap = new Map();
const headers = document.querySelectorAll('h5');
headers.forEach((h5) =>{
  headerMap.set(h5, 0);
  h5.addEventListener('click', function(){
    cont = headerMap.get(this);
    headerMap.set(this, cont + 1);
    console.log(headerMap);
  });
});
console.log(headerMap);
