---
layout: post
title: ! "2021-11-04 기준 Backend Frameworks most stars GitHub"
categories: [잡담]
excerpt: " "
comments: false
share: false
tags:
  - 잡담
date: '2021-11-04 23:49:38'
---

## 갑자기 생각나서 기록!
1. laravel/laravel - 67201 ⭐
2. django/django - 60527 ⭐
3. spring-projects/spring-boot - 57930 ⭐
4. pallets/flask - 57047 ⭐
5. expressjs/express - 54868 ⭐
6. rails/rails - 49355 ⭐
7. spring-projects/spring-framework - 44893 ⭐
8. meteor/meteor - 42673 ⭐
9. nestjs/nest - 41834 ⭐
10. strapi/strapi - 40704 ⭐
11. tiangolo/fastapi - 37632 ⭐
12. koajs/koa - 31910 ⭐
13. beego/beego - 27169 ⭐
14. symfony/symfony - 25948 ⭐
15. kataras/iris - 21368 ⭐
16. bcit-ci/CodeIgniter - 18169 ⭐
17. dotnet/core - 16408 ⭐
18. sinatra/sinatra - 11445 ⭐
19. cakephp/cakephp - 8438 ⭐



## 알고는 있지만 검색하지 않은 것들.. 
* zend Framework 2
* play framework
* padrino
* bottle
* pyramid
* yii framework
* revel
* phoenix

## stars를 긁어온 방법은..
1. https://youtu.be/94LokRYL5n0 에서 대략적으로 몇 개를 가져옴.
2. 아래 코드 실행
```html
<script src="https://cdn.jsdelivr.net/npm/superagent"></script>
<script type="text/javascript">
  function load(link)
  {
    superagent
      .get("https://api.github.com/repos/"+link)
      .then((res) => console.log(link, " - ", res.body.stargazers_count));
  }
  load("laravel/laravel")
  load("tiangolo/fastapi")
  load("django/django")
  load("pallets/flask")
  load("spring-projects/spring-framework")
  load("spring-projects/spring-boot")
  load("expressjs/express")
  load("rails/rails")
  load("meteor/meteor")
  load("nestjs/nest")
  load("koajs/koa")
  load("strapi/strapi")
  load("beego/beego")
  load("symfony/symfony")
  load("kataras/iris")
  load("bcit-ci/CodeIgniter")
  load("dotnet/core")
  load("sinatra/sinatra")
  load("cakephp/cakephp")
</script>
```
3. 결과물을 가지고 엑셀로 가져가서 정렬함.  
정렬은 =SORT(N1:O19,1,-1) 이 함수 사용.  
함수 사용은 [https://www.oppadu.com/엑셀-sort-함수/](https://www.oppadu.com/엑셀-sort-함수/) 이곳에서 배움