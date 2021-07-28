import { every, filter, findIndex, map, reduce } from './functions';

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

// test for findIndex function
describe('findIndex', () => {
  it('takes an array and callback returning the index of the first item', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const callback = (item) => item % 4;
    const result = findIndex(originalArray, callback);

    expect(result).toEqual(3);
    expect(originalArray).toEqual([1, 2, 3, 4, 5]);
  });
});

//test for reduce function
describe('reduce', () => {
  it('takes an array and callback returning the accumulator value', () => {
    const originalArray = [1, 2, 3, 4, 5];
    const callback = (accumulator, item) => accumulator + item;

    const result = reduce(originalArray, callback);

    expect(result).toEqual(15);
    expect(originalArray).toEqual([1, 2, 3, 4, 5]);
  });
});

// test for every fuction
describe('every', () => {
  it('takes an array and callback returning an overall true value if all callback is is true/truthy', () => {
    const originalArray = ['Peter', 'Kubisiak', 'Ben', 'Dan', 'Devon', 'Eion'];
    const callback = (item) => {
      if(item.includes('e')) {
        return true;
      }
    };

    const result = every(originalArray, callback);

    expect(result).toEqual(true);
    expect(originalArray).toEqual(['Peter', 'Kubisiak', 'Ben', 'Dan', 'Devon', 'Eion']);
  });
});
