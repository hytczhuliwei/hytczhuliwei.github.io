---
layout: post
title:  "linear--gradient渐变方向图解"
date:   2016-09-07
desc: "linear--gradient渐变方向图解"
keywords: "css,background , 渐变,角度"
categories: [css]
tags: [css,background,linear-gradient,渐变]
icon: icon-css
---

CSS 渐变 是在 CSS3 Image Module 中新增加的 <image> 类型. 使用 CSS 渐变可以在两种颜色间制造出平滑的渐变效果. 用它代替图片，可以加快页面的载入时间、减小带宽占用。同时，因为渐变是由浏览器直接生成的，它在页面缩放时的效果比图片更好，因此你可以更加灵活、便捷的调整页面布局。

>下面是渐变的角度图
>
![Alt text](/blogImages/css/linear-gradient-deg.png)


>我们来试一试从绿色向红色的渐变


>0度的情况

``` stylus
background:linear-gradient(0deg, green, red);
```
![Alt text](/blogImages/css/linear-gradient-deg-0.png)


>-45度的情况

``` stylus
background:linear-gradient(-45deg, green, red);
```
![Alt text](/blogImages/css/linear-gradient-deg-f45.png)


>90度的情况

``` stylus
background:linear-gradient(90deg, green, red);
```
![Alt text](/blogImages/css/linear-gradient-deg-90.png)