const getLoginList = (logins) => {
  return logins.map(data =>{
    return data.login;
  });
}

const usersUrl = 'http://localhost:3000/users/';
const getData = fetch(usersUrl);


const result = getData
.then(data=>data.json())
.then(data =>getLoginList(data));

