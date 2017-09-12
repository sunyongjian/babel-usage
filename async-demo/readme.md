node 4.8.4 是没有 async 函数的，通过 transform async 函数，来比较 polyfill 和 runtime 两种方法.
因为加入了 babel-register，所以 node 可以直接跑。babel 的配置，也放到 register 的参数中。

另外：polyfill 的 babel 我直接用了 babel-preset-env, 所以没有像 runtime 文件那样，引用好多 plugins。但是 polyfill 还是需要主动引用的，

执行：
```
node async-demo/polyfill.js

node async-demo/runtime.js
```