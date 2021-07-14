---
bg: "tools.jpg"
layout: post
title:  원시값과 참조값에 대해 알아보기
crawlertitle: Markdown sample
summary: Description for this article
date:   2021-07-06
categories: posts
tags: ['jekyll']
author: redVi
bg: "african-penguins.jpg"
---


Primitive Type (원시값)
: 단순한 데이터 타입 
> Undefined, Null, boolean, 숫자, 문자

### 레퍼객체 (Wrapper Object)

숫자 -> Number <br>
a문자열 -> String <br>
불리언 -> Boolean<br>
null,undefined -> 없음<br>
{% highlight js %}
var str = 'coding'; (내부적으로 str = new String('coding');) 
console.log(str.length); . Object access Operator(객체 접급 연산자임)
console.log(str.charAt(0));
//문자열을 제어하기 위해서 문자열이 객체인것처럼 동작해야함.
//사용이 끝난 객체는 원래의 원시 데이터 타입으로 돌려주는 작업을 함. 

var str ='coding';
str.prop = 'everybody'; //문자열을 객체처럼 사용하려고 하면 객체화 시킴.(Wrapper object)
console.log(str.prop); //undefined

{% endhighlight %}

Reference Type(참조값)
: 여러 값으로 구성되는 객체를 가르킴
> 메모리에 저장된 객체 
  자바스크립트는 메모리 위치에 직접 접근하는것을 허용하지않음, 따라서 해당 객체에 대한 참조를 조작하는것임.

* 변수b를 만들면서 a를 할당하는 구문 -> primitive type이나 reference type이나 동작자체는 동일함

a값을 복사해서 b에다가 집어넣음 
다른건 a가 무엇을 들고있느냐이다.

a에 오브젝트를 할당하면 a에 오브젝트를 가르키는 주소값을 할당하게된다.그럼여기에서는 a가 가지고 x는1이다 라는 값을 가지고 있는 값은 어디에있는지에 대한 주소이다.

자바스크립트에서 변수가 이동을 할때는 항상 값을 복사하게 된다. 
복사하는 대상이 값 전체인지 아니면 해당값을 가르키는 주소값을 복사하게된다.



{% highlight js %}

//Primitive Type
let a = 1;
let b = a;

a += 10;
console.log(a); // 11
console.log(b); // 1

// References

let a = {x : 1};
let b = a;

a.x += 10;
console.log(a.x) //11
console.log(b.x) //11

{% endhighlight %}

