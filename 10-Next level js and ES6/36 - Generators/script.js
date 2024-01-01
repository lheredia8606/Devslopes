const arr = ['leo', 'mara', 'shanti'];

function* getArr (){
  for (const element of arr) {
    yield(element);
  }
}

const variab = getArr();

variab.next();