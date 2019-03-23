const assert = require('assert');
Object.freeze(assert);
const makeExchange = require('./src/index.js');

describe('makeExchange function', () => {
  it('should return ERROR object if the currency more than 10000', () => {
    assert.deepEqual(makeExchange(10001), {error: "You are rich, my friend! We don't have so much coins for exchange"});
  });

  it('should return correct object if the currency less than or equal to 1000', () => {
    assert.deepEqual(makeExchange(1000), {"H": 20});
    assert.deepEqual(makeExchange(9999), {"H":199,"Q":1,"D":2,"P":4});
  });

  it('should return empty object if passed currency in is 0', () => {
    assert.deepEqual(makeExchange(0), {});
  });

  it('should return amount of half-dollars correctly', () => {
    assert.deepEqual(makeExchange(50), {"H":1});
    assert.deepEqual(makeExchange(500), {"H":10});
    assert.deepEqual(makeExchange(102), {"H":2,"P":2});
  });

  it('should return amount of half-dollars correctly', () => {
    assert.deepEqual(makeExchange(50), {"H":1});
    assert.deepEqual(makeExchange(500), {"H":10});
    assert.deepEqual(makeExchange(102), {"H":2,"P":2});
  });

  it('should return amount of quarters correctly', () => {
    assert.deepEqual(makeExchange(25), {"Q":1});
    assert.deepEqual(makeExchange(75), {"H":1,"Q":1});
    assert.deepEqual(makeExchange(26), {"Q":1,"P":1});
  });

  it('should return amount of dimes correctly', () => {
    assert.deepEqual(makeExchange(10), {"D":1});
    assert.deepEqual(makeExchange(35), {"Q":1,"D":1});
    assert.deepEqual(makeExchange(11), {"D":1,"P":1});
  });

  it('should return amount of nickels correctly', () => {
    assert.deepEqual(makeExchange(5), {"N":1});
    assert.deepEqual(makeExchange(15), {"D":1,"N":1});
    assert.deepEqual(makeExchange(7), {"N":1,"P":2});
  });

  it('should return amount of pennies correctly', () => {
    assert.deepEqual(makeExchange(1), {"P":1});
    assert.deepEqual(makeExchange(12), {"D":1,"P":2});
    assert.deepEqual(makeExchange(4), {"P":4});
  });

  it('should return object with exchanged money correctly', () => {
    assert.deepEqual(makeExchange(44), {"Q":1,"D":1,"N":1,"P":4});
    assert.deepEqual(makeExchange(92), {"H":1,"Q":1,"D":1,"N":1,"P":2});
  });

  it('should return amount of trapped water correctly 1', () => {
    assert.deepEqual(makeExchange(142), {"H":2,"Q":1,"D":1,"N":1,"P":2});
    assert.deepEqual(makeExchange(149), {"H":2,"Q":1,"D":2,"P":4});
  });

  it('should return amount of trapped water correctly 2', () => {
    assert.deepEqual(makeExchange(147), {"H":2,"Q":1,"D":2,"P":2});
    assert.deepEqual(makeExchange(52), {"H":1,"P":2});
  });

  it('should return amount of trapped water correctly 3', () => {
    assert.deepEqual(makeExchange(55), {"H":1,"N":1});
    assert.deepEqual(makeExchange(60), {"H":1,"D":1});
  });

  it('should return amount of trapped water correctly 4', () => {
    assert.deepEqual(makeExchange(62), {"H":1,"D":1,"P":2});
    assert.deepEqual(makeExchange(65), {"H":1,"D":1,"N":1});
  });

  it('should return amount of trapped water correctly 5', () => {
    assert.deepEqual(makeExchange(478), {"H":9,"Q":1,"P":3});
  });

  it('should return amount of trapped water correctly 6', () => {
    assert.deepEqual(makeExchange(967), {"H":19,"D":1,"N":1,"P":2});
  });

  it('should return amount of trapped water correctly 8', () => {
    assert.deepEqual(makeExchange(7898), {"H":157,"Q":1,"D":2,"P":3});
  });

  it('should return amount of trapped water correctly 9', () => {
    assert.deepEqual(makeExchange(8043), {"H":160,"Q":1,"D":1,"N":1,"P":3});
  });

  it('should return amount of trapped water correctly 10', () => {
    assert.deepEqual(makeExchange(999), {"H":19,"Q":1,"D":2,"P":4});
  });

  it('should return amount of trapped water correctly 11', () => {
    assert.deepEqual(makeExchange(-1000), {});
  });
});
