import { expect } from 'chai';
import add from './es6';

describe('es6 两数相加', () => {
  it('2 + 4 = 6', () => {
    expect(add(2, 4)).equal(6);
  })
});
