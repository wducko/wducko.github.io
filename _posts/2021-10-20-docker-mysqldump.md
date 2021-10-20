---
layout: post
title: ! "docker mysqldump 하기"
categories: [docker]
excerpt: " "
comments: false
share: false
tags:
  - docker
date: '2021-10-20 23:53:23'
---

## 코드

```cmd
@echo off
@set YEAR=%date:~0,4%
@set MONTH=%date:~5,2%
@set DAY=%date:~8,2%
@set HOUR=%time:~0,2%
@set MINUTE=%time:~3,2%
@set SECOND=%time:~6,2%

@set POSTFIX3=%YEAR%%MONTH%%DAY%_%HOUR%%MINUTE%%SECOND%.sql
@set POSTFIX3=%POSTFIX3: =%
echo %POSTFIX3%

docker exec wducko-mysql-app /usr/bin/mysqldump -uwduckouser -pwduckopass wducko_db > "%POSTFIX3%"
docker exec wducko-mysql-app /usr/bin/mysqldump -uwduckouser -pwduckopass wducko_db > init.sql
```

## 실행 모습
![]({{ site.baseurl }}/assets/posts/docker/docker_mysqldump.png)

뭔가 error가 난 것 같지만  
폴더를 보면 파일이 잘 생성되어있다.