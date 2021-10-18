---
layout: post
title: ! "비번 생성기"
categories: [잡담]
excerpt: " "
comments: false
share: false
tags:
  - 잡담
date: '2021-10-18 18:53:44'
---

## 회사에서 6개월마다 비번을 변경하라고 한다.
그래서 개발했다.  
키보드 절반 잘라서. 좌 우를 번가락하며 치는 식이다.  
영타 두개 숫자 두개를 번가락하면서 치며 마지막에 특수문자를 붙히는 식이다.

## 버튼 클릭클릭

<div id="password_creator_field"></div>
<div id="password_creator_btn" class="btn" style="cursor: pointer;" onclick="password_creator_click()">이 버튼을 눌러보세요.</div>
<script type="text/javascript" src="/assets/posts/idletalk/password-creator.js"></script>
<script type="text/javascript">
  var password_creator_click = function (e) {
    document.getElementById("password_creator_field").innerHTML = password_creator();
  }
</script>


### 개발자 도구를 눌러보면 코드를 볼 수 있다! ㅎㅎ
