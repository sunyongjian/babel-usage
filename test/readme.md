简单的测试代码。
源代码按照 es5 的方式写，测试代码 require.test.js 也没用 es6 module。执行 ```mocha```
顺利的跑完测试。

但是当你的源代码是 es6 的时候，并且测试代码也用 es6 写。执行```mocha``` 就会有问题了。所以需要 babel 编译后才能执行。mocha 支持编译器，通过 ```--compilers ``` 指定，你可以指定 babel，或者其他 E.g: coffee。因为 mocha 终究还是跑 node 程序，并且适用于实时编译，所以用 babel-register。

配置简化了，直接 env。

执行： 
```
npm run test

```
or 执行单个文件：

```
./node_modules/mocha/bin/mocha --compilers js:babel-register test/import.test.js
```