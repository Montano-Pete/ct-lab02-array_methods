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
      if(callback(arr[index])) {
        newArr = [...newArr, arr[index]];
      }
    }
  }

  return newArr;
};
