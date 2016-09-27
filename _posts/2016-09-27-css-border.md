---
layout: post
title:  "CSS边框"
date:   2016-09-27
desc: "一些常见边框的实现方法总结，比如半透明边框，多重边框，边框圆角等"
keywords: "css,border,box-shadow,outline,background"
categories: [css]
tags: [css,border,border-radius,box-shadow,outline]
icon: icon-css
---
# 1、半透明边框
单纯地在边框上使用半透明颜色并不能实现半透明边框，原因在于背景background会出现在边框下。知道了原因，解决方案我们也就自然而然地可以想到了。对，就是background的 **background-clip**属性！
代码如下：

``` stylus
 border:10px solid hsla(0,0%,100%,.5);
 background: white;
 background-clip: padding-box;
```

# 2、多重边框
css并没有直接提供多重边框的实现方法。所以我们需要借助**box-shadow**或**outline**间接地实现该效果。
## box-shadow方案
### 语法

``` stylus
box-shadow: h-shadow v-shadow blur spread color inset;
```
注释：box-shadow 向框添加一个或多个阴影。该属性是由逗号分隔的阴影列表，每个阴影由 2-4 个长度值、可选的颜色值以及可选的 inset 关键词来规定。省略长度的值是 0。

| h-shadow | 必需。水平阴影的位置。允许负值。         |
| -------- | ---------------------------------------- |
| v-shadow | 必需。垂直阴影的位置。允许负值。         |
| blur     | 可选。模糊距离。                         |
| spread   | 可选。阴影的尺寸或扩张半径。 |
| color    | 可选。阴影的颜色。                       |
| inset    | 可选。将外部阴影 (outset) 改为内部阴影。 |

这里我们主要也是借助第四个参数**spread**，也就是扩张半径，通过制定正值或者负值可以让投影面积加大减小。**一个正值的扩张半径加上两个为0的偏移量以及为0的模糊值，得到的投影其实就像一道实线边框**

例如：

``` stylus
background: green;
box-shadow: 0 0 0 10px gray,
            0 0 0 15px pink;
```
![Alt text](/blogImages/css/border-box-shadow.png)

**多个投影是层层叠加的，第一层投影位于最顶层(也就是gray这个颜色)，它占据了10px的宽度，如果我们还需要一个5px宽度的边框，就需要设定扩张半径为15px(10px + 5px)。**

PS：
1，投影不是边框，它不会影响布局，不受box-sizing影响，这就需要我们自己通过内边距或者外边距来调整；
2，上面我们创建的投影是在元素外，不会响应鼠标事件，比如点击悬停等。如果需要可以给box-shadow加上inset关键字，使投影绘制在元素内圈。


## outline方案

此方案只适用于双层边框的情况，但相对于box-shadow，它可以产生虚线边框，另一个好处在于，你可以通过outline-offset属性来控制他跟元素边缘之间的间距，这个属性接受负值。
使用outline实现之前的双边框代码如下：

``` stylus
background:green;
border: 10px solid gray;
outline: 5px solid pink;
```
PS：outline不会贴合border-radius产生的圆角



# 边框内圆角
实现边框内圆角主要受益于两个事实：**描边不会跟着元素的圆角走，但box-shadow会。**
因此，如果我们把两者叠加到一起，box-shadow会刚好填补描边和容器圆角之间的空隙。
代码如下：

``` stylus
background:tan;
border-radius: .8em;
padding:1em;
box-shadow: 0 0 0 .6em #655;
outline: .6em solid #655;
```
![Alt text](/blogImages/css/border-inset-radius.png)
