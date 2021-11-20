---
layout: post
title: ! "git 특정 branch만 다운로드 받는 방법"
categories: [git]
excerpt: " "
comments: false
share: false
tags:
  - git
date: '2021-11-21 05:54:29'
---

## 명렁어
`git clone -b <branch> --single-branch <저장소 URL>`

## 예시
`git clone -b stable --single-branch https://github.com/discordjs/discord.js.git`