import 'babel-polyfill';


function* gen() {
  yield 1;
  yield 2;
}

const g = gen();

console.log(g.next());
console.log(g.next());
console.log(g.next());

