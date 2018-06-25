const { expect } = require('chai');
const twoSum = require('./twoSum');

describe('twoSum', () => {
    it('Returns an empty array if there is an empty array input', () => {
      expect(twoSum([], 10)).to.equal([]);
    }),
    it('Array is sorted', () => {
        expect(twoSum([2,4,3], 7)).to.equal([1,2])
    }),
    it('Returns the indices of two distinct values in the array that add up to the target value', () => {
        expect(twoSum([2,3,4], 7)).to.equal([1,2])
    })
})