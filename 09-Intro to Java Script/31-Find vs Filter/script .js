let persons = [
  {
    name: 'Leandro',
    age: 36
  },
  {
    name: 'Mara',
    age: 33
  },
  {
    name: 'Dinho',
    age: 6
  },
  {
    name: 'Shanty',
    age: 4
  },
];

let minor = persons.filter(person => {
  return person.age < 15;
});
console.log(minor);

let firstMinor = persons.find(person => {
  return person.age < 15;
});
console.log(firstMinor);