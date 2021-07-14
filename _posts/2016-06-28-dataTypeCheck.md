---
layout: post
title:  "타입판별"
crawlertitle: Markdown sample
summary: "Jekyll default page"
date:   2021-07-08
categories: posts
tags: 'jekyll'
author: eunho
---
## 자료형 확인방법

- 1.typeOf
> typeof는 함수가 아닌 연산자이다. 즉, 괄호를 사용하지 않고 !value, ~value와 같이 사용할 수 있는 단항 연산자이다.<br>
### 단 null 은 하나의 object로 인식하기 때문에 typeof를 통해 타입을 확인하면 object가 반환됨.
{% highlight js %}
typeof 3; // === 'number' 
typeof 'str'; // === 'string' 
typeof {}; // === 'object' 
typeof []; // === 'object' 
typeof function () {}; // === 'function' 
typeof null; // === 'object'

* let value = null;
typeof value === "object" //true

var value = null;
value !== null && typeof value === "object"


{% endhighlight %}
- 2.instanceof
>instanceof 는 비교 연산자로 >,<,== 와 같이 두개의 인자를 받는 연산자로 앞의 비교 연산자들을 이용하는 기분으로 사용하면 된다.(다항연산자)
{% highlight js %}
var Person = function(){ 
    this.name = "unikys"; 
}; 
"foo" instanceof String; // === false 
"foo" instanceof Object; // === false 
true instanceof Boolean; // === false 
true instanceof Object; // === false 
[0,1] instanceof Array; // === true 
{0:1} instanceof Object; // === true 
var color1 = new String("red"); 
var color2 = "red"; 
color1 == color2; // === true

"foo".constructor instanceof String; // === false 
"foo".constructor === String; // === true?!

{% endhighlight %}

> object literal인 []와 {}에 대해서 typeof는 둘다 object를 리턴했지만, 
instanceof는 각각 Array와 Object를 리턴한 것도 관심을 가져야할 결과이다. 
{% highlight js %}
"foo".constructor instanceof String; // === false 
"foo".constructor === String; // === true?!


String 
function String() { [native code] }

{% endhighlight %}

> 크롬에서 String을 실행하면 위와같이 나온다. <br>
"foo".constructor 는 Function의 instance인 것이다. instance의 개념에 대해서 다시한번 돌이켜보면 어쩌면 당연한 결과이기도 하다. <br>
즉, String 자체는 Function의 instance인 것이다.
이렇게 살펴보면 결국 두가지의 연산자는 각각 다른 용도로 활용하면 될 것이다.<br> 
primitive type을 구분할 때에는 typeof를 사용하고 클래스의 타입을 구분할 때에는 instanceof를 사용하면 된다.

- 3.constructor

- 4.Object.prototype.toString.call(obj) === ‘[object type]’



