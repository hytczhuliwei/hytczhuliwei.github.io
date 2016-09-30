---
layout: post
title:  "椭圆"
date:   2016-09-30
desc: "border-radius属性的基本用法"
keywords: "css、border、border-radius"
categories: [css]
tags: [css,border]
icon: icon-css
---

关于border-radius我们需要了解，当任意两个相邻圆角的半径之和超过border box的尺寸是，用户代理必须按比例减少各个边框半径所使用的值，直到他们不会相互重叠为止。而且如果它的宽高相等就显示为一个圆，宽高不等就显示为一个椭圆。另外，它还有一个鲜为人知的特性：它**可以单独指定水平半径和垂直半径，只需要用一个斜杠（/）分隔开这两个值**。
例如  

``` stylus
border-radius: 10px 20px 10px 30px / 10px 20px 10px 30px;
```


如上所示，如果我们传给它四个值，**这四个值就会被分别从左上角开始以顺时针应用到元素的各个拐角**，斜杠左右分别是水平半径和垂直半径。如果我们提供的值少于四个，它们会以CSS的常规方式重复，如果我们提供三个值，则第四个值与第二个值相同，如果我们提供两个值，则第三个值与第一个值相同。

# 半椭圆

``` stylus
border-radius: 50% / 100% 100% 0 0;
```
![Alt text](/blogImages/css/border-radius1.png)

由半椭圆可知，水平上左右上角垂直对称，也就是左右上角半径值是相同的应为50%，垂直方向上顶部两个圆角占据了整个元素的高度，而且底部没有圆角，因此垂直方向上 border-radius应为 100% 100% 0 0。又因为底部两圆角在垂直方向上为0，所以水平方向的圆角值没有作用。
由此我们可以很容易地生成一个沿纵轴劈开的半椭圆

``` stylus
border-radius: 100% 0 0 100% / 50%;
```
![Alt text](/blogImages/css/border-radius2.png)

# 四分之一椭圆
要创造一个四分之一椭圆，它只有一个角，所以只有一个角的水平和垂直半径值为100% ，其他三个角都不能设圆角。

``` stylus
border-radius: 100% 0 0 0;
```
![Alt text](/blogImages/css/border-radius3.png)




 
 