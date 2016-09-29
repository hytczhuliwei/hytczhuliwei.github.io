---
layout: post
title:  "CSS背景初探"
date:   2016-09-28
desc: "关于背景的一些应用"
keywords: "css,background,background-position,background-origin,background-size"
categories: [css]
tags: [css,background]
icon: icon-css
---
# 1、背景定位

## background-position的扩展语法

在css3中background-position的语法得到了扩展，**它允许指定背景图片距离任意角的偏移量，只要我们在偏移量前面指定关键字。**
举例来说，如果想让背景图片跟右边缘保持20px的偏移量，同时跟底部保持10px的偏移量，代码如下：

``` stylus
background:url("image src") no-repeat green;
background-position: right 20px bottom 10px;
```
![Alt text](/blogImages/css/background-position-rightbottom.png)

## background-origin
在**背景图片距离某个角的偏移量与内边距一致**时，我们可以使用background-origin实现背景定位。
扩展：默认情况下，background-position定位是以padding-box为准的，但是我们可以使用background-origin来改变这种情况，比如 content-box。

``` stylus
padding:10px;
background:url("image src") no-repeat bottom right;
background-origin: content-box;
```

## calc()
对于之前右下角偏移的方案，我们同样可以使用calc()方法实现。相对于右偏移20px即 100%-20px，相对于下偏移10px即 100%-10px。但是，使用calc()方法的时候不要忘记在**运算符两侧各加一个空白符**，否则会产生解析错误。

``` stylus
background:url("image src") no-repeat;
background-position: calc(100% - 20px) calc(100% - 10px);
```

# 条纹背景
这里我们主要用的是 css3渐变 ，首先我们先通过一段代码了解一下linear-gradient。

``` stylus
background:linear-gradient(yellowgreen 20%,royalblue 80%);
```
![Alt text](/blogImages/css/background-linear-gradient1.png)

上面代码表示首先，**0%-20%这部分会被绿色的实色填充，80%-100%部分由红色实色填充，而20%-80%这部分是绿色到红色的渐变区域**。

因此，如果多个色标具有相同的位置，它们会产生一个无限小的渐变区域，从效果上看，颜色会突然变化，而不是平滑的渐变过程。

``` stylus
background:linear-gradient(yellowgreen 50%,royalblue 50%);
```
![Alt text](/blogImages/css/background-linear-gradient2.png)

从上面我们可以看到，已经没有任何渐变效果了，只有两个实色块。
因为**渐变是一种由代码生成的图像**，我们可以像对待任何背景图像那样对待它，比如通过background-size调整它的尺寸。

``` stylus
background:linear-gradient(yellowgreen 50%,royalblue 50%);
background-size:100% 30px;
```
![Alt text](/blogImages/css/background-linear-gradient3.png)

在上图中可以看到，我们已经创建了两条条纹的背景。
我们还可以用相同的方法来创建不等宽的条纹，只需调整色标的位置。

``` stylus
background:linear-gradient(yellowgreen 30%,royalblue 30%);
background-size:100% 30px;
```
![Alt text](/blogImages/css/background-linear-gradient4.png)

**同时，如果某个色标的位置值比整个列表中在它前面的色标的位置值都要小，则该色标的位置值会被设置为它前面所有色标位置值的最大值。**
根据这个我们可以对上面的代码进行改造：

``` stylus
background:linear-gradient(yellowgreen 30%,royalblue 0);
background-size:100% 30px;
```
上面的代码和之前的有同样的效果，但是我们只需要修改一个参数就可以调整条纹的宽度！
我们也可以生成三种颜色的条纹：

``` stylus
background:linear-gradient(yellowgreen 33.3%,royalblue 0,royalblue 66.6%,gold 0);
background-size:100% 30px;
```
![Alt text](/blogImages/css/background-linear-gradient5.png)

## 垂直条纹与斜向条纹
 ### 垂直条纹
 垂直条纹的代码与水平条纹几乎是一样的，区别在于，我们需要在**开头加上一个额外的参数来指定渐变的方向。**
 渐变方向的默认值是to bottom，垂直的改成to right就可以了。还有background-size的值需要颠倒一下。
 

``` stylus
background: linear-gradient(to right,yellowgreen 50%,royalblue 0);
background-size: 30px 100%;
```
![Alt text](/blogImages/css/background-linear-gradient6.png)

### 斜向条纹
渐变方向除了 to right 等参数 还可以指定度数。（具体可参照[linear--gradient渐变方向图解][1]）
斜向条纹的做法类似于使用位图循环，即生成一个包含四条条纹的贴片，然后让其循环。

``` stylus
background: linear-gradient(45deg,
                           yellowgreen 25%,royalblue 0, 
                           royalblue 50%, yellowgreen 0,
                           yellowgreen 75%,royalblue 0 );
background-size: 30px 30px;              
```
![Alt text](/blogImages/css/background-linear-gradient7.png)

45°我们可以通过贴片实现，但是其他角度的呢？
linear-gradient()和radial-gradient()还各有一个循环式的，**repeating-linear-gradient()和repeating-radial-gradient()**。后者**色标是无限循环重复的，直到填满整个背景**。
下面我就使用它来生成一个60°的斜向条纹。

``` stylus
background: repeating-linear-gradient(60deg,yellowgreen,yellowgreen 15px,royalblue 0,royalblue 30px);
```
![Alt text](/blogImages/css/background-linear-gradient8.png)

## 同色系条纹
对于同色系条纹，我们可以不为每种条纹单独指定颜色，而是吧最深的颜色指定为背景色，同时把半透明白色条纹叠加在背景色之上来得到浅色条纹。

``` stylus
background:yellowgreen;
background-image: repeating-linear-gradient(30deg,
                                            hsla(0,0%,100%,.3),
                                            hsla(0,0%,100%,.3) 15px,
                                            transparent 0 , transparent 30px);
```
![Alt text](/blogImages/css/background-linear-gradient9.png)





 


  [1]: https://hytczhuliwei.github.io/css/2016/09/07/css-linear-gradient-deg.html