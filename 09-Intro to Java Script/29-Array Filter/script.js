let numbers = [3,4,9,3,8,1];
let greaterThan5 = numbers.filter(function (number){
  return number > 5;
});
console.log(greaterThan5);

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

const studentsWithMoreThan90 = classRoom33.students.filter(function(student){
  return student.note >= 90;
});
console.log(studentsWithMoreThan90);