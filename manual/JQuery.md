# jQuery

* [GitHub：我们为什么会弃用jQuery？](http://www.infoq.com/cn/articles/removing-jquery-from-github-frontend)

```
我们可以将jQuery与现代浏览器支持的Web标准的快速演化进行比较：

$(selector)模式可以使用querySelectorAll()来替换;
现在可以使用Element.classList来实现CSS类名切换;
CSS现在支持在样式表中而不是在JavaScript中定义可视动画;
现在可以使用Fetch Standard执行$.ajax请求;
addEventListener()接口已经足够稳定，可以跨平台使用;
我们可以使用轻量级的库来封装事件委托模式;
随着JavaScript语言的发展，jQuery提供的一些语法糖已经变得多余。
另外，链式语法不能满足我们想要的编写代码的方式。例如：
最后，我们开始使用Flow来注解类型，以便在构建时执行静态类型检查，
并且我们发现，链式语法不适合做静态分析，
因为几乎所有jQuery方法返回的结果都是相同的类型。
```

* https://flow.org/en/docs/getting-started/