// function for map
export const map = (arr, callback) => {
  const newArr = [];

  for (let index = 0; index < arr.length; index++) {
    const item = arr[index];
    newArr[index] = callback(item);
  }

  return newArr;
};
