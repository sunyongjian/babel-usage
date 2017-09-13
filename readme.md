## 介绍
多个 babel 包的使用 example，每个文件夹下对应有 .babelrc 和 README，可以查看用法。

### babel-core
```./babel-core```


### babel-register
```./register```

### babel-external-helpers
```./helpers```

### transform-runtime, babel-polyfill
```./async-demo```

通过两种不同的垫片方式，在 node 4.8.4 中利用编译器（ babel-register）实现 async 函数的运行。

### transform-runtime
```./runtime```

通过 webpack 打包，检测 transform-runtime 的效果，是否会重复引入，build 文件 size 。

### mocha
```./test```

mocha 结合 babel 测试 es6+ 的代码。

### babel-preset-env

