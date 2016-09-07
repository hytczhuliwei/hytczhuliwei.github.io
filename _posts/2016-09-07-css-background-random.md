---
layout: post
title:  "css生成伪随机背景"
date:   2016-09-07
desc: "怎样使用css生成伪随机背景"
keywords: "css,background ,随机, 渐变,质数"
categories: [css]
tags: [css,background,linear-gradient,渐变,质数]
icon: icon-css
---
实现CSS的随机背景主要通过background的线性渐变linear-gradient来实现。

首先，我们给元素一个默认背景作为底，然后将其余重复部分用linear-gradient分割为不同的图层，我们在色标中定好每个部分的宽度，再用background-size控制他们的间距。

但是，即使如此，这个背景依然是会重复的，而**重复部分的宽度就是所有background-size的最小公倍数！**

要让这种随机性更加真实，我们需要把重复部分的宽度最大化。**为了让最小公倍数最大化，这些数字最好是“相对质数”**
相对质数即 最小公倍数就是他们的乘积。比如3,4,5就是相对质数，他们的最小公倍数就是3x4x5=60。当然，一个质数跟其他所有数字都构成相对质数。

根据上面上所说的，我们可以使用下面的代码实现一个 “伪随机背景”

``` stylus
background: hsl(20,40%,90%);
background-image:
		linear-gradient(90deg, #fb3 11px, transparent 0),
		linear-gradient(90deg, #ab4 23px, transparent 0),
		linear-gradient(90deg, #655 41px, transparent 0);
background-size: 41px 100%, 61px 100%, 83px 100%;
```


从上面的代码我们得到一个平铺开 41x61x83=207583px大小的不重复背景，这已经超过我们已有的所有屏幕分辨率。因此我们可以认为他就是随机的背景。
