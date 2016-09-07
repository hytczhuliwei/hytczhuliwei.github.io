---
layout: post
title:  "jquery中 $.each 和for 怎么终止本次循环"
date:   2016-09-07
desc: "jquery，循环 ，each, for "
keywords: "jquery，循环 ，each, for"
categories: [jquery]
tags: [jquery,loop]
icon: icon-javascript-alt
---
>1、for可以使用continue终止本次循环，使用break终止整个循环。

>2、而在$.each中则使用return true终止本次 ，return false终止整个循环。