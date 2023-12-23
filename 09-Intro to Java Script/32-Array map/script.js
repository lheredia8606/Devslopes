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

classRoom33.students.map((student,index) => {
  student.note += 20;
  console.log(`${student.name} has ${student.note} points at index ${index}`);
});

console.log(classRoom33);