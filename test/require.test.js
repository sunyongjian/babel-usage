var chai = require('chai');
var except = chai.expect;
var add = require('./es5');

describe('两数相加', function() {
  it('2 + 3 = 5', function() {
    except(add(2, 3)).equal(5);
  })
})