---
bg: "tools.jpg"
layout: post
title:  값복사
crawlertitle: Markdown sample
summary: Description for this article
date:   2021-07-07
categories: posts
tags: ['jekyll']
author: eunho
bg: "african-penguins.jpg"
---


### 값복사



- 원시값은 값을 복사할때 복사된 값을 다른 메모리에 할당 하기 때문에 원래의 값과 복사된 값이 서로에게 영향을 미치지 않음
- 참조값은 변수가 객체의 주소를 가리키는 값이기 때문에 복사된 값(주소)이 같은 값을 가리킨다.
{% highlight js %}
const a = {number: 1};
let b = a;
b.number = 2
console.log(a); //{numeber:2}
console.log(b); //{number:2}
{% endhighlight %}

## 얕은복사
- 객체를 복사할때 원래 값과 복사된 값이 같은 참조를 가리키고 있는것
객체안에 객체가 있을경우 한개의 객체라도 원본 객체를 참조하고 있다면 얕은복사 라고함.

> object.assign()
- 첫번쨰 요소로 들어온 객체에 다음인자로 들어온 객체를 복사해줌.

{% highlight js%}
const obj = {
  a:1,
  b: {
    c:2,
  },
};
const copiedObj = Object.assign({}, obj);
copiedObj.b.c = 3

obj === copiedObj //false
obj.b.c === copiedObj.b.c //true
{% endhighlight %}
> 전개연산자

{% highlight js%}
const obj = {
  a:1,
  b: {
    c:2,
  },
};

const copiedObj = {...obj}
copiedObj.b.c = 3

obj === copiedObj //false
obj.b.c === copiedObj.b.c //true
{% endhighlight %}
## 깊은복사
- 객체안에 객체가 있을 경우에도 원본과의 참조가 완전히 끊어진 객체.

>재귀 함수를 이용한 복사
{% highlight js%}
const obj = {
  a: 1,
  b: {
    c: 2,
  },
};

function copyObj(obj) {
  const result = {};

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      result[key] = copyObj(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }

  return result;
}

const copiedObj = copyObj(obj);

copiedObj.b.c = 3

obj.b.c === copiedObj.b.c //false 

{% endhighlight%}

> Json.stringify()
- Json.stringify()는 객체를 json문자열로 변환하는데 이과정에서 원본 객체와의 참조가 모두 끊어짐
객체를 json문자열로 변환후 Json.parse()를 이용해서 자바스크립트 객체로 만들어 주면 깊은 복사가 됨.
{% highlight js%}
const obj = {
  a: 1,
  b: {
    c:2,
  },
};
const copiedObj = Json.parse(JSON.stringify(obj));

copiedObj.b.c = 3;
obj.b.c === copiedObj.b.c //false
{% endhighlight%}

>라이브러리 사용
- lodash 라이브러리 사용.
