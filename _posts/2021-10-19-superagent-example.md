---
layout: post
title: ! "superagent example"
categories: [example]
excerpt: " "
comments: false
share: false
tags:
  - example
date: '2021-10-19 23:25:37'
---

# 코드

```html
<img id="superagent-example-img" />

<script src="https://cdn.jsdelivr.net/npm/superagent"></script>
<script type="text/javascript">
  (function() {
    superagent
      .get("https://aws.random.cat/meow")
        .then((res) => {
          document.getElementById("superagent-example-img").src = res.body.file;
          document.getElementById("superagent-example-img").parentNode.href = res.body.file;
        });
  })();
</script>
```

# 예제

<div id="superagent-example-text" style="display: none;">이미지 불러오는 중입니다. 잠시만 기다려주세요..</div>
<div id="superagent-example-img-btn" class="btn" style="cursor: pointer; user-select: none; display: inline-block;" onclick="superagent_example_img_click()">이 버튼을 누르면 고양이를 새로 불러옵니다.</div>
<img id="superagent-example-img" onload="loadImage()"/>

<script src="https://cdn.jsdelivr.net/npm/superagent"></script>
<script type="text/javascript">
  (function() {
    superagent
      .get("https://aws.random.cat/meow")
      .then((res) => {
        document.getElementById("superagent-example-img").src = res.body.file;
        document.getElementById("superagent-example-img").parentNode.href = res.body.file;
        document.getElementById('superagent-example-img').style.display = "block";
        document.getElementById('superagent-example-img-btn').style.display = "inline-block";
        document.getElementById('superagent-example-text').style.display = "none";
      });
  })();
</script>

<script type="text/javascript">
  function hideData() {
    document.getElementById('superagent-example-img').parentNode.style.display = "none";
    document.getElementById('superagent-example-img-btn').style.display = "none";
    document.getElementById('superagent-example-text').style.display = "block";
  }

  function showData() {
    document.getElementById('superagent-example-img').parentNode.style.display = "block";
    document.getElementById('superagent-example-img-btn').style.display = "inline-block";
    document.getElementById('superagent-example-text').style.display = "none";
  }

  function loadImage() {
    showData();
  }

  function superagent_example_img_click() {
    hideData();
    superagent
      .get("https://aws.random.cat/meow")
      .then((res) => {
        document.getElementById("superagent-example-img").src = res.body.file;
        document.getElementById("superagent-example-img").parentNode.href = res.body.file;
      });
  }
</script>


# 위 예제 전체를 알고 싶으시면..

```html
<div id="superagent-example-text" style="display: none;">이미지 불러오는 중입니다. 잠시만 기다려주세요..</div>

<div id="superagent-example-img-btn" class="btn" style="cursor: pointer; user-select: none; display: inline-block;" onclick="superagent_example_img_click()">이 버튼을 누르면 고양이를 새로 불러옵니다.</div>

<p><a href="https://purr.objects-us-east-1.dream.io/i/rme9h.jpg" class="fancybox fancybox.image" rel="group" style="display: block;"><img id="superagent-example-img" onload="loadImage()" src="https://purr.objects-us-east-1.dream.io/i/rme9h.jpg" style="display: block;"></a></p>

<script src="https://cdn.jsdelivr.net/npm/superagent"></script>

<script type="text/javascript">
  (function() {
    superagent
      .get("https://aws.random.cat/meow")
      .then((res) => {
        document.getElementById("superagent-example-img").src = res.body.file;
        document.getElementById("superagent-example-img").parentNode.href = res.body.file;
        document.getElementById('superagent-example-img').style.display = "block";
        document.getElementById('superagent-example-img-btn').style.display = "inline-block";
        document.getElementById('superagent-example-text').style.display = "none";
      });
  })();
</script>

<script type="text/javascript">
  function hideData() {
    document.getElementById('superagent-example-img').parentNode.style.display = "none";
    document.getElementById('superagent-example-img-btn').style.display = "none";
    document.getElementById('superagent-example-text').style.display = "block";
  }

  function showData() {
    document.getElementById('superagent-example-img').parentNode.style.display = "block";
    document.getElementById('superagent-example-img-btn').style.display = "inline-block";
    document.getElementById('superagent-example-text').style.display = "none";
  }

  function loadImage() {
    showData();
  }

  function superagent_example_img_click() {
    hideData();
    superagent
      .get("https://aws.random.cat/meow")
      .then((res) => {
        document.getElementById("superagent-example-img").src = res.body.file;
        document.getElementById("superagent-example-img").parentNode.href = res.body.file;
      });
  }
</script>
```