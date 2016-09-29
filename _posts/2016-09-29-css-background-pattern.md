---
layout: post
title:  "复杂的背景图案"
date:   2016-09-29
desc: "关于背景的一些应用"
keywords: "css,background,background-position,background-image、background-size"
categories: [css]
tags: [css,background]
icon: icon-css
---

# 网格
当我们把多个渐变图案结合起来，让他们透过彼此的透明区域显现时，我们就可以创建出网格！
下面的代码会创建方格纹图案

``` stylus
background:white;
background-image: linear-gradient(90deg,rgba(18,149,225,.5)  50%,transparent 0),
				  linear-gradient(rgba(18,149,225,.5)  50%,transparent 0);
background-size: 30px 30px;
```
![Alt text](/blogImages/css/background-grid1.png)

某些情况下，我们希望网格中每个格子的大小可以调整，而网格线条的粗细保持固定，类似于图纸辅助线，这时我们可以**使用固定长度而不是百分比作为色标的场景。**

``` stylus
background: yellowgreen;
background-image: linear-gradient(white,1px ,transparent 0),
                  linear-gradient(90deg,white,1px ,transparent 0);
background-size: 30px 30px;
```
![Alt text](/blogImages/css/background-grid2.png)

我们得到了一个1px白线画出来的30px大小的网格图案。

# 波点
对于波点，我们需要使用径向渐变。径向渐变它允许我们创建圆形，椭圆，或是他们的一部分。径向渐变能创建最简单的图案就是圆点阵列。

``` stylus
background: yellowgreen;
background-image: radial-gradient(white 30%, transparent 0);
background-size: 30px 30px;
```
![Alt text](/blogImages/css/background-wave1.png)

我们还可以生成两层的圆点阵列图案，并把它们的背景定位错开。

``` stylus
background: yellowgreen;
background-image: radial-gradient(white 30%, transparent 0)，
                  radial-gradient(white 30%, transparent 0);
background-size: 30px 30px;
background-position:0 0,15px 15px;
```
![Alt text](/blogImages/css/background-wave2.png)


# 棋盘
![Alt text](/blogImages/css/background-checkerboard1.png)

仅凭css渐变无法直接创建四周有空隙的方块，因此我们需要**使用两个直角三角形拼成正方形**

``` stylus
background: #eee; 
background-image: linear-gradient(45deg, #bbb 25%, transparent 0),     
                  linear-gradient(45deg, transparent 75%, #bbb 0); 
background-position: 0 0, 15px 15px; 
background-size: 30px 30px;
```
![Alt text](/blogImages/css/background-checkerboard2.png)

如上图所示，这就是我们要的效果，但这只是棋盘的一半，要把它复制一份出来，并改变它的位置。

``` stylus
background: #eee; 
background-image: linear-gradient(45deg, #bbb 25%, transparent 0),     
                  linear-gradient(45deg, transparent 75%,gold 0),     
                  linear-gradient(45deg, gold 25%, transparent 0),     
                  linear-gradient(45deg, transparent 75%, #bbb 0); 
background-position: 0 0, 15px 15px,
                     15px 15px, 30px 30px; 
background-size: 30px 30px
```
![Alt text](/blogImages/css/background-checkerboard3.png)

这样我们就创建出了一个棋盘，并且可以修改棋盘方块的颜色！我们还可以把四层渐变合并成两层渐变。还可以将方块的颜色改为半透明的，这样我们修改棋盘底色就可以改变整个棋盘的色调了！

``` stylus
background: #eee;
background-image:linear-gradient(45deg,#bbb 25%, transparent  0,transparent  75%,#bbb 0),
                 linear-gradient(45deg,gold 25%, transparent  0,transparent  75%,gold 0);
background-position: 0 0,15px 15px;
background-size: 30px 30px;
```


