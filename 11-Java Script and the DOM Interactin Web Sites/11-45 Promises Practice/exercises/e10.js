export const getFirstResolvedPromise = (promises) => {
  return Promise.any(promises).then((resolve) => resolve);
};

export const getFirstPromiseOrFail = (promises) => {
  return Promise.race(promises).then(data => data);
};

export const getQuantityOfRejectedPromises = (promises) => {
  return Promise.allSettled(promises)
  .then((settledPromises) => {
    const rejectedPromisesCount = settledPromises.reduce((count, promiseResult) => {
      return promiseResult.status === 'rejected' ? count + 1 : count;
    }, 0);

    return rejectedPromisesCount;
  });
};

export const getQuantityOfFulfilledPromises = (promises) => {
  return Promise.allSettled(promises)
  .then((settledPromises) => {
    const fulfilledPromisesCount = settledPromises.reduce((count, promiseResult) => {
      return promiseResult.status === 'fulfilled' ? count + 1 : count;
    }, 0);

    return fulfilledPromisesCount;
  });
};

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Array ⬇ ⬇ ⬇ ⬇
export const allCharacters = [
  { id: 1, name: "billy" },
  { id: 2, name: "mandy" },
  { id: 3, name: "grim" },
];
//! ⬆  ⬆  ⬆  ⬆ do not edit this array   ⬆  ⬆  ⬆  ⬆ ️

//!  ⬇ ⬇ ⬇ ⬇ Don't Edit This Function ⬇ ⬇ ⬇ ⬇
export const fetchCharacterById = (id) => {
  // This function simulates an API, although most api's will return
  // simple data like this quickly, we want you to practice concurrent programming
  // so we're forcing each call to take one second

  const validIds = allCharacters.map((character) => character.id);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!validIds.includes(id))
        reject(`we do not have a character with the id of ${id}`);

      return resolve(allCharacters.find((character) => character.id === id));
    }, 1000);
  });
};
//! ⬆  ⬆  ⬆  ⬆ do not edit this function   ⬆  ⬆  ⬆  ⬆ ️

export const fetchAllCharactersByIds = async (ids) => {
  // To solve this you must fetch all characters passed in the array at the same time
  // use the `fetchCharacterById` function above to make this work
  //*  write code to pass test ⬇ ️
  let promises =[];
  ids.forEach(id => {
    promises.push(fetchCharacterById(id));
  });
  return Promise.all(promises)
  .then((results)=>{
    return results;
  })
  .catch((error)=>[]);
};
