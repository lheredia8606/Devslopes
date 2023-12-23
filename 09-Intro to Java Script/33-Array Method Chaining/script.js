const classRoom33 = {
  group:'classRoom 33',
  studentNumber: 5,
  students:[
    {
      name: 'Leandro',
      note: 86  
    },
    {
      name: 'Mara',
      note: 91  
    },
    {
      name: 'Shanty',
      note: 92  
    },
    {
      name: 'Dinho',
      note: 98  
    },
    {
      name: 'Pepe',
      note: 89  
    }
  ]
};

let studentPlusAverage = classRoom33.students
  .filter(function (student){
    return student.note >= 90;
  })
  .map(function(student){
    student.note += 5;
    return student;
  })
  .reduce(function (acc, currVal, index,array){
    let total = acc.sum + currVal.note;
    return {sum: total, arr: array};
  },{sum:0, arr: []}); 

console.log((studentPlusAverage.sum / studentPlusAverage.arr.length).toFixed(2));