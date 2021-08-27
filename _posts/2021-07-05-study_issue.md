---
bg: "tools.jpg"
layout: post
title:  call by value, call by reference
crawlertitle: Markdown sample
summary: Description for this article
date:   2021-07-05
categories: posts
tags: ['jekyll']
author: eunho
bg: "african-penguins.jpg"
---


#### Call by value(값에 의한 호출)
#### Call by reference(참조에 의한 호출)
#### Call by sharing (공유에 의한 호출)

blueshw.github.io/2018/09/15/pass-by-reference -> 예시

>  Call by value(값에 의한 호출)는 인자로 받은 값을 복사하여 처리를 한다. <br/>
Call by reference(참조에 의한 호출)는 인자로 받은 값의 주소를 참조하여 직접 값에 영향을 준다. 간단히 말해 값을 복사를 하여 처리를 하느냐, <br/>
 아니면 직접 참조를 하느냐 차이인 것이다.

> 자바스크립트는 함수를 호출할때 Call By value 이다.

{% highlight js %}

function change(obj) {
  obj = { p1: 100 }
}
const o = { p1: 1 }
change(o)
console.log(o)

{% endhighlight %}

위의 예제의 경우 함수안에 obj는 변수의 재할당으로 값을 복사해 재할당했기때문에 같은 메모리를 바라보고있지않다.
따라서 인자로 들어온 변수의 값을 변경하지않는다.
실제로 함수안에서 obj를 재선언후 obj.a의 값을 찍어보면 undefined가 찍히는것을 볼수있음.

실제로 상단에 선언되어있는 변수의 값을 변경을 원할시 하단의 형식으로 대부분 진행함.

{% highlight js %}

let obj = { a: 1 };

function referenceTest(obj) {
  obj.a=3;
  console.log(obj);

  obj= {
    key01: 'value', key02: 'value'
  }

  console.log(obj);

  return obj;
}

obj = referenceTest(obj);

console.log(obj);

{% endhighlight %}



