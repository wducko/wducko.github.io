---
layout: post
title: ! "뭔가 jekyll 기반 github.io 가 느리다. 원인이 뭘까?"
categories: [잡담]
excerpt: " "
comments: false
share: false
tags:
  - 잡담
date: '2021-10-18 12:17:49'
---

## 결론부터 말하면
원인을 모른다.

## 모바일에서 접속하면 느리다. 이유가 뭘까?
모바일에서 [https://wducko.github.io/](https://wducko.github.io/) 을 접속했다.  
그런데 로딩바가 뜨고 체감시간 3초쯤 걸리고 article로 넘어간다.  
상위 메뉴인 `/categories/` `/about/` `/archives/` `/tags/` 은 로딩 없다. article 넘어갈 때만 이런다.

그래서 [https://github.com/wducko/docker-blog](https://github.com/wducko/docker-blog) 을 만들어서 실행해봤다.  
똑같다.

????????? 모르겠다. 뭐가 원인인거지;;;;

## 아무튼 docker nginx jekyll blog 만들었다.
[https://github.com/wducko/docker-blog](https://github.com/wducko/docker-blog)  
어쩌다보니 호기심으로 만들었다.  
기존에 만들었던거 응용해서 급하게 만들어봤다.  
그냥 `html nginx` 해주는 거라서 `jekyll` 가 아니어도 된다.