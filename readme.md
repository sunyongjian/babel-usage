## Issues

有任何此 repo 的问题，或者 babel 使用的疑惑，都可以新建 [issue](https://github.com/sunyongjian/babel-usage/issues/new)，一起讨论~

## 介绍
多个 babel 包的使用 example，每个文件夹下对应有 .babelrc 和 README，可以查看用法。

### [babel-core](https://github.com/sunyongjian/babel-usage/tree/master/babel-core)
适用于你在代码中去执行 babel 编译。

### [babel-register](https://github.com/sunyongjian/babel-usage/tree/master/register)
适用于开发环境，做解析器用。

### [babel-external-helpers](https://github.com/sunyongjian/babel-usage/tree/master/helpers)
了解什么是 babel-helpers，启用了 transform-runtime 就不需要自己生产了。

### [transform-runtime, babel-polyfill](https://github.com/sunyongjian/babel-usage/tree/master/async-demo)

通过两种不同的垫片方式，在 node 4.8.4 中利用编译器（ babel-register）实现 async 函数的运行。

### [transform-runtime](https://github.com/sunyongjian/babel-usage/tree/master/runtime)

通过 webpack 打包，检测 transform-runtime 的效果，是否会重复引入 asyncToGenerator 函数，build 文件 size 。

### [mocha](https://github.com/sunyongjian/babel-usage/tree/master/test)

mocha 结合 babel 测试 es6+ 的代码。

### [babel-preset-env](https://github.com/sunyongjian/babel-usage/tree/master/env)

- env 这个东西，适用于你知道你要运行的环境，它会帮你做好适配。另外，一些特殊的 plugins 还是需要加入的。要清楚它能做到什么。

- env 默认情况下，跟 preset-lastest 一样，都包括了 preset-es2015,es2016,es2017。如果你要使用一些[提案](http://exploringjs.com/es2016-es2017/ch_tc39-process.html)中的语法，还要加上 `preset-stage-x` 。





