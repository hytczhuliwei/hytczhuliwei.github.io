---
layout: post
title:  "连续的图像边框"
date:   2016-09-30
desc: "关于背景在边框中的应用"
keywords: "css,background,background-position,border、border-image、background-size"
categories: [css]
tags: [css,background,border]
icon: icon-css
---
 
 
 
对于边框，我们常用的就是border，图像边框呢？当然是border-image了！大家肯定是这么想的，但是，border-image它的原理是**九宫格伸缩法**（可见下图），它把图片切割成9块，然后把它们应用到元素边框相应的边和角。

![Alt text](/blogImages/css/background-border1.png)
![Alt text](/blogImages/css/background-border2.png)
![Alt text](/blogImages/css/background-border3.png)

左图：待切分的图片，图中的虚 线表示切割线 中图：border-image: 33.34% url(...) stretch; 右图：border-image: 33.34% url(...) round;

而我们并不想让图片的某个特定部分固定在拐角处，而是希望出现在拐角处的图片出于是随着元素宽高和边框厚度的变化而变化的。这用border-image是无法实现的。
最简单的方法是使用两个HTML元素：一个元素用图片做背景，另一个元素用来存放内容，并设置纯白背景
但这种方法需要额外的元素，显然不够理想。我们可以利用CSS渐变和背景的扩展，主要思路就是**在背景图片之上再叠加一层纯白的实色背景**，为了让下层的背景图片透过边框区域显示出来，我们**需要给两层背景指定不同的background-clip** ，同时，图片的显示尺寸不仅取决于padding-box的尺寸，而且被放置在padding-box的原点（左上角），我们看到的就是背景图片以平铺的方式蔓延到border box区域的效果，为了修正这个问题，我们**还需`enter code here`要把background-origin也设置为border-box。**

``` stylus
border: 1em solid transparent;
background: linear-gradient(white,white),
            url(...);
background-size:cover;
background-clip: padding-box,border-box;
background-origin: border-box;
```
![Alt text](/blogImages/css/background-border4.png)

我们还可以将上面代码整合到background的简写属性中


``` stylus
border: 1em solid transparent;
background: linear-gradient(white,white)  padding-box,
            url(...) border-box 0 / cover;
```

这个技巧还可以用在渐变图案上，下面的代码生成一种老式信封样式的边框。

``` stylus
border: 1em solid transparent;
background: linear-gradient(white,white) padding-box,
            repeating-linear-gradient(-45deg,red 0,red 12.5%,
                                             transparent 0,transparent 25%,
                                             #58a 0,#58a 37.5%,
                                             transparent 0,transparent 50%) 0 / 5em 5em;
```
![Alt text](/blogImages/css/background-border5.png)

上述样式同样可以使用border-image实现,但是存在一些问题。当我们改变border-image-slice时还需要改变border-width与之匹配，且只能指定为px单位。

``` stylus
border: 16px solid transparent;
border-image: 16 repeating-linear-gradient(-45deg,red 0,red 1em,transparent 0,transparent 2em,#58a 0,#58a 3em,transparent0,transparent 4em);
```

而且只要稍加修改我们就可以生成滚动的边框，即蚂蚁行军边框。

``` stylus
.demo{
          border: 1em solid transparent;
          background: linear-gradient(white,white) padding-box,
                      repeating-linear-gradient(-45deg,red 0,red 12.5%,
                                                       transparent 0,transparent 25%,
                                                       #58a 0,#58a 37.5%,
                                                       transparent 0,transparent 50%) 0 / 5em 5em;
          animation: ants 12s linear infinite;
}
@keyframes ants{ to { background-position: 100% } };
```

当然 border-image也有它的强大之处，尤其是搭配渐变之后！下面是一个顶部边框被裁减的效果。

``` stylus
border: .2em solid transparent;
border-image: 100% 0 0 linear-gradient(90deg,currentColor 4em,transparent 0);
padding-top: 1em;
```
![Alt text](/blogImages/css/background-border6.png)



