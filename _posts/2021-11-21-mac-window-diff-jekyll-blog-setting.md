---
layout: post
title: ! "window와 다른 mac에서의 jekyll blog 세팅"
categories: [jekyll]
excerpt: " "
comments: false
share: false
tags:
  - jekyll
date: '2021-11-21 07:27:38'
---

## mac 에서 jekyll 블로그 세팅을 할 때는..
window에서는 ruby 설치하고  
bundle 설치하고 끝이다.

그런데 mac의 경우에는 한 가지 더 추가 된다.
바로 `xcode`다.  
app store 에서 xcode 설치하고,  
terminal에서 `xcode-select --install`를 실행하여 설치해야한다.  
(약 10분정도 걸린다. 단, 충전 선을 연결해야한다.)  
(그리고 처음 다운 받을 때는 무슨 60시간 걸린다고 뜨기도 한다..)

`xcode`, `xcode-select --install`  
이 두 가지가 더 필요하다.

## 이 외. window와 mac의 jekyll 개발 다른 점
수정 사항을 빌드하는데 2배 차이 난다.  
현재 쓰고 있는 맥북은 2017년 맥북 프로 13형 가장 싼 맥북인데  
4.8 ~ 5.1초 걸린다.

반면 윈도우는 i7-7세대, 2070. 임에도 10초~13초 씩 걸린다.

ruby가 확실히 리눅스에서 쓰던 거여서 그런지 최적화가 잘 된건가..? 싶다.
