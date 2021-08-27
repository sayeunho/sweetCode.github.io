---
bg: "tools.jpg"
layout: post
title:  default function parameter
crawlertitle: Markdown sample
summary: Description for this article
date:   2021-07-08
categories: posts
tags: ['jekyll']
author: eunho
bg: "african-penguins.jpg"
---

### 매개변수

- 매개변수에 값이 없거나 undefined가 전달될 경우 이름붙은 매개변수를 기본값으로 초기화 할수있다.

{% highlight js %}

function multiply(a, b = 1) {
  return a *b;
}

console.log(multiply(5,2));

console.log(multiply(5));

{% endhighlight %}


{% highlight js %}

function addTen(num) {
  num += 10;
  retunr num;
}
var count = 20;
var result = addTen(count);
console.log(count); // 20 변동없음
console.log(result); //30 

{% endhighlight %}

- addTen이 넘겨받은 매개변수 num은 지역변수임.
코드 실행시 count가 매개변수로 전달됨. <br/>
이때 변수의 값은 20이었는데 이값이 매개변수 num 에 복사되어 addTen() 내부에서 쓰입니다. <br/>
전달된 값이 원시값이기 때문에 기존값은 변경이 없음.

{% highlight js %}
function setName(obj) {
  obj.name = "Nicholas";
}
var person = new Object();
setName(person);
alert(person.name) //Nicholas
{% endhighlight %}



{% highlight js %}
function setName(obj) {
  obj.name ="Nicholas";
  obj = new Object();
  obj.name = "Greg";
}
var person = new Object();
setName(person);
console.log(person.name); //nicholas
{% endhighlight %}

>person을 setName()에 전달하면 name 프로퍼티에 nicholas가 저장됨.
그런다음 변수 obj는 새객체를 가르킴 새객체의 name프로퍼티가 greg를 저장함.

