---
layout: post
title:  "H5搜索框样式与事件"
date:   2016-10-13
desc: "在H5页面中实现搜索框，包括设置手机键盘搜索样式，通过js处理提交等"
keywords: "input、search、submit"
categories: [html]
tags: [html,input,search]
icon: icon-html
---

input[type=search]简介

html5对表单元素做了一些增强，其中对input元素，我们可以指定更多的属性来控制它，如required，autofocus，maxlength等，具体有做了哪些增强，可以阅读官方文档，也可以参照MDN。我们现在要讲的是input[type=search]这个表单元素，不是讲他如何增强，而是主要讲如何更加方便的改变它默认的样式。

1、为了防止手机自定义的样式影响，我们需要对input设置

``` stylus
input[type=search]{
    -webkit-appearance: none;
}
```

2、重写输入框后 小叉按钮的样式

``` stylus
input[type=search]::-webkit-search-cancel-button{
    -webkit-appearance: none;
    height: .8rem;
    width: .8rem;
    border-radius: 50%;
    background: url();
    margin-right: .3rem;
}
```

3、我们也可以更改placeholder的样式，这个看需求

``` stylus
input[type=search]::-webkit-input-placeholder{
    color: blue;
}
```

这时候我们的样式就完成了。
下面是HTML中的设置。

``` stylus
<form id="search" action="javascript:void(0);" onsubmit="fun();return false;">
	<input type="search" placeholder="商品名称">
</form>
```

具体搜索相关的操作放在fun()方法中处理就可以了。

关于**onsubmit="fun();return false;"**，onsubmit在submit之前发生，当onsubmit返回true时才会执行submit，如果onsubmit返回了false就不执行submit。

fun()方法里面同时需要**$("input[type=search]").blur();**来关闭手机的输入法。



