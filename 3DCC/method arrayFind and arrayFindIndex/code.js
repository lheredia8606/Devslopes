const theObject = [
  {
    id:1,
    comments: 'The moon is white',
    likes: 200,
    user: 'Shanty',
  },
  {
    id:2,
    comments: 'You Sucks',
    likes: 3,
    user: 'Leo',
  },
  {
    id:3,
    comments: 'You Rock',
    likes: 56,
    user: 'Dinho',
  },
];

const object = theObject.find((obj)=> obj.id === 3);
const index = theObject.findIndex((obj)=> obj.id === 3);
console.log(object);
console.log(index);