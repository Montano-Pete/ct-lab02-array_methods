// function for map
export const map = (arr, callback) => {
  const newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];
    newArr[index] = callback(item); //equivalent of push
  }

  return newArr;
};

// function for filter
export const filter = (arr, callback) => {
  let newArr = [];

  for (let index = 0; index < arr.length; index++) {
    if (arr[index]) {
      if (callback(arr[index])) {
        newArr = [...newArr, arr[index]];
      }
    }
  }

  return newArr;
};

// function for findIndex
export const findIndex = (arr, callback) => {
  let i = '';

  for (let index = 0; index < arr.length; index++) {
    if(callback(arr[index]) === 0) {
      return i = index;
    }
  }
  return i;
};

// function for reduce
export const reduce = (arr, callback, initialValue) => {
  if(!initialValue) {
    let accumulator = arr[0];
    for (let index = 1; index < arr.length; index++) {
      const item = arr[index];
      accumulator = callback(accumulator, item);
    }
    return accumulator;
  }
};

// function for every
export const every = (arr, callback) => {
  for(const item of arr) {
    const itemTwo = callback(item);
    if(itemTwo) {
      return true;
    }
  }
};
