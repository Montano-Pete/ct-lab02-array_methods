import { map } from './functions';

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
