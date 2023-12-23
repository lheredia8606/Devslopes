let arr = [2,5,7,1,5];
let sum = arr.reduce(function(accumulator, currentValue){
  return accumulator + currentValue;
});

console.log(sum);

const classRoom33 = {
  group:'classRoom 33',
  studentNumber: 5,
  students:[
    {
      name: 'Leandro',
      note: 89  
    },
    {
      name: 'Mara',
      note: 89  
    },
    {
      name: 'Shanty',
      note: 95  
    },
    {
      name: 'Dinho',
      note: 95  
    },
    {
      name: 'Pepe',
      note: 89  
    }
  ]
};

let notesSum = classRoom33.students.reduce(function(accumulator, currentValue){
  return accumulator + currentValue.note;
},0);
console.log(notesSum);