---
layout: post
title: ! "backend framework query 랭킹"
categories: [잡담]
excerpt: " "
comments: false
share: false
tags:
  - 잡담
date: '2021-11-04 23:24:32'
---

<p><code class="language-plaintext highlighter-rouge">랭킹 사이트 링크 - <a href="https://www.techempower.com/benchmarks/#section=data-r20&hw=ph&test=db">https://www.techempower.com/benchmarks/#section=data-r20&hw=ph&test=db</a></code></p>

## query 기준으로 랭키 매기는 사이트를 봤다.
라운드 20, 2021-02-08 기준이고 1등이랑 php, fastapi만 뽑은 이미지다.  
![]({{ site.baseurl }}/assets/posts/techempower/round20_multiple_query.png)
![]({{ site.baseurl }}/assets/posts/techempower/round20_single_query.png)

## 신기한 애가 랭킹 1위를 하고 있었다.
just-js 라는 건데 리눅스에서만 돌아가는 녀석이며  
퍼포먼스가 너무 압도적이라서 기록한다.

옛날에는 fastapi 겁나 좋았던거같은데.. 흠..  
(이 사이트가 아니라 다른 곳에서 좋다고 말만 들었고 퍼포먼스가 자세하게 얼마나 좋은지는 모른다.)

## 스샷을 찍고 보니 빠졌는데.
django는 싱글, 멀티 순으로 각각 390위 400위다.  
flask는 싱글, 멀티 순으로 각각 407위 395위다.  
