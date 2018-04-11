## tree-shaking
rollup 和 webpack2+ 都支持 tree-shaking，我们不介绍它是做什么的，而是跟 babel 使用的时候，存在的问题。我们都知道 tree-shaking 是依赖 ES Module 的，所以如果我们在使用 webpack 打包的时候，使用 babel-loader 的 es2015-presets，包含 `ES2015 modules to CommonJS transform` 功能，webpack 就无法利用 ES Module 静态依赖的特性，做 tree-shaking 了，所以，在使用 babel 的时候应该把这个功能禁掉。
.babelrc 的配置中加：
```js
  "presets": [
    [
      "env",
      {
        "modules": false
      }
    ]
```