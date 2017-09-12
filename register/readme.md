### 介绍
这个包在浏览器开发的时候（也就是要编译到成产环境）用不到。通常是在跑 node 程序的时候，通过在顶层代码中 ```require('babel-register')```，改写 node 本身的 require，添加钩子，然后在 require 其他模块的时候，就会触发 babel 编译。举个栗子，node 端肯定是不支持写 jsx 的，这是 React 的语法，那就要通过 babel 编译。我们可以把 jsx 的代码 a.js 编译完输出到一个 b.js，然后 ```node b.js``` 也是可以执行的。register 的特点是实时编译，不需要输出文件，执行的时候去编译。

执行
```
node register/index.js
```

也可以测试 babel-node
```
node_modules/.bin/babel-node register/test.js
```
当前目录下已经加入 .babelrc