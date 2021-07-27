import { filter, findIndex, map } from './functions';

// test for map function
describe('map', () => {
  it('takes an array and callback creating a new array with the return value of each called callback', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const callback = (item) => item * 2;
    const result = map(originalArray, callback);



    expect(result).toEqual([2, 4, 6, 8, 10]);
    expect(originalArray).toEqual([1, 2, 3, 4, 5]);
  });
});

// test for filter function
describe('filter', () => {
  it('takes an array and callback creating a new array with callbacks returned true/truthy', () => {
    const originalArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const callback = (item) => item > 5;
    const result = filter(originalArray, callback);

    expect(result).toEqual([6, 7, 8, 9, 10]);
    expect(originalArray).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe('findIndex', () => {
  it('takes an array and callback returning the index of the first item', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const callback = (item) => item % 4;
    const result = findIndex(originalArray, callback);

    expect(result).toEqual(3);
    expect(originalArray).toEqual([1, 2, 3, 4, 5]);
  });
});
