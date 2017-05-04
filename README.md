[
![](http://www.wdshare.org/static/skin2015/img/logo.png)](http://www.wdshare.org/)

## 介绍
大家好，我是F7，在西安前端行业打拼中，这个项目的产生是因为本人想在移动端实现[WDShare官网](http://www.wdshare.org/)一些页面的练习，同时也希望能成为入门级移动端可以模仿的一个项目。

这个项目涵盖了SUI框架的使用、界面的制作、交互逻辑思考等内容。

练手项目，没有专业的设计人员，界面比较简陋，但不影响大家学习。

## Demo预览
请用手机访问：[https://imf7.github.io/Teach-WDShare-m-for-sui/dist/index.html](https://imf7.github.io/Teach-WDShare-m-for-sui/dist/index.html)

或者扫描二维码：

![](https://imf7.github.io/Teach-WDShare-m-for-sui/doc/img/code.jpg)

不方便手机的请查看截图：

[![](https://imf7.github.io/Teach-WDShare-m-for-sui/doc/img/001-s.jpg)](https://imf7.github.io/Teach-WDShare-m-for-sui/doc/img/001.jpg) [![](https://imf7.github.io/Teach-WDShare-m-for-sui/doc/img/002-s.jpg)](https://imf7.github.io/Teach-WDShare-m-for-sui/doc/img/002.jpg) [![](https://imf7.github.io/Teach-WDShare-m-for-sui/doc/img/003-s.jpg)](https://imf7.github.io/Teach-WDShare-m-for-sui/doc/img/003.jpg) [![](https://imf7.github.io/Teach-WDShare-m-for-sui/doc/img/004-s.jpg)](https://imf7.github.io/Teach-WDShare-m-for-sui/doc/img/004.jpg) [![](https://imf7.github.io/Teach-WDShare-m-for-sui/doc/img/005-s.jpg)](https://imf7.github.io/Teach-WDShare-m-for-sui/doc/img/005.jpg) [![](https://imf7.github.io/Teach-WDShare-m-for-sui/doc/img/006-s.jpg)](https://imf7.github.io/Teach-WDShare-m-for-sui/doc/img/006.jpg)

## 是否使用UI框架，为什么？
声明一下我的个人观点，这个项目并没有定性为大型项目，对页面的设计要求也没有大公司那么高，属于普通的正常项目，所以，在不影响加载速度、不影响用户体验的情况下我尽可能采用现成的UI框架来实现，这样可以利用别人已经做好的组件及交互解决方案来快速实现项目页面，同时也可以规避很多兼容问题，你也可以认为我比较懒，但这个方法确实可行，哈哈！！！

## 选择什么样的框架？
框架选型要看我们的具体需求，首先来看看我们的项目有哪些特征，或者需要实现那些效果。总结需求如下：

* 1、需要基础样式库、组件库
* 2、需要侧栏功能
* 3、需要轮播图功能
* 4、需要弹出提示层
* 5、一定要独立页面，传统连接形式，有助于SEO【我们是信息展示型站点】
* 6、最好有路由功能可以模拟Native App的切换效果

满足上面需求的UI框架我们都可以使用。

经过我们的搜索和考察，SUI Mobile框架就能满足上述所有的要求，除此之外它还有更多的组件可供我们使用，详细内容可以参考[http://m.sui.taobao.org/](http://m.sui.taobao.org/)官网。

注意：该框架不好的地方是官方已经在2016.3停止更新，但经过考察，现有的功能完全足够我们使用，所以我们没有必要担心官方是否持续更新，加上是淘宝大厂出的框架，现有功能的稳定性还是可靠的，所以我们就使用它了，当然，或许你有更熟悉的框架可以完成上述功能，也可以使用。


## 框架的基本使用
该框架使用非常简单，无需任何工程化，直接引用静态资源文件即可使用。
```html
<link rel="stylesheet" href="//g.alicdn.com/msui/sm/0.6.2/css/sm.min.css">
<script type='text/javascript' src='//g.alicdn.com/sj/lib/zepto/zepto.min.js' charset='utf-8'></script>
<script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/sm.min.js' charset='utf-8'></script>
```

如果你用到了拓展包中的组件，还需要引用extend扩展包：
```html
<link rel="stylesheet" href="//g.alicdn.com/msui/sm/0.6.2/css/??sm.min.css,sm-extend.min.css">
<script type='text/javascript' src='//g.alicdn.com/msui/sm/0.6.2/js/??sm.min.js,sm-extend.min.js' charset='utf-8'></script>
```

当然，上面这些引用的地址都是官方给的CDN地址，你可以去官网下载对应的静态资源放到你的本地来引用。

官方的使用解说：[http://m.sui.taobao.org/getting-started/](http://m.sui.taobao.org/getting-started/)

这是我们给出的Hello World案例：[https://imf7.github.io/Teach-WDShare-m-for-sui/example/hello.html](https://imf7.github.io/Teach-WDShare-m-for-sui/example/hello.html)

案例中有两点要解释：
 * 1、$.init();为框架暴漏的初始化方法，使用该框架的页面必须引用这个才能正确出发所有组件；
 * 2、案例中注册了一个click事件，但是用的是事件代理模式，是为了防止该页面的内容是后写进去的，建议使用该框架时都这样注册事件，因为我们要用到路由加载外部页面，原理就是后写入html内容进去。


## 我们担心的问题
真正使用一个框架前先要确认我们担心的一些问题都能够解决，来看看解决了上面的需求后，我们还担心那些问题呢？

* 1、路由如何使用，他们之间的切换是否流畅
* 2、路由分页面内切换和独立页面间的切换，切换后当前页面组件是否可以正常使用，是否可以触发一些事件来出列其他事情，例如切换成功后ajax读取一些信息
* 3、UI样式不满足的情况下是否比较容易扩展和微调来满足我们的需求
* 4、侧栏功能可否顺利使用，并应用到全站

### 路由如何使用
看这样一个Demo：[https://imf7.github.io/Teach-WDShare-m-for-sui/example/router.html](https://imf7.github.io/Teach-WDShare-m-for-sui/example/router.html)
路由分内联和外部两种，内联也就是页面内的某个路由模块，外联是独立存在的外部页面。

## 开始编写首页

















