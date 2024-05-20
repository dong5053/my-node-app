const add = require('../index');
const chai = require('chai');
const expect = chai.expect;

describe('Addition Function', () => {
  it('should return the sum of two numbers', () => {
    expect(add(1, 2)).to.equal(3);
  });

  it('should return the sum of two negative numbers', () => {
    expect(add(-1, -2)).to.equal(-3);
  });
});

