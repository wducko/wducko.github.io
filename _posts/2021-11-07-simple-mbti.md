---
layout: post
title: ! "간단 MBTI 진단 해보기"
categories: [잡담]
excerpt: " "
comments: false
share: false
tags:
  - 잡담
date: '2021-11-07 23:23:41'
---

## 슈카님 생방을 보면서 가져온 내용..
<p><code class="language-plaintext highlighter-rouge">링크 - <a href="https://youtu.be/7eHdE8K1ztA">https://youtu.be/7eHdE8K1ztA</a></code></p>

```
I vs E -> I 내향형, E 외향형
          사람들과 있는게 좋다. E
          사람들과 있는게 피곤하다. I
```

```
N vs S -> N 직관형, S 감각형
          망상을 많이 한다. N
          현실적이다. S
```

```
T vs F -> T 사고형, F 감정형
          문제의 원인 파악 T
          문제의 공감. F
```

```
J vs P -> J 계획형, P 즉흑형
          계획을 짜고 여행간다. J
          즉흥적인 여행간다. P
```

### 일단 나는 INTJ 이다.

## 위 내용을 보고. 아래 체크 박스를 선택하면 링크가 바뀝니다. 바뀐 링크를 클릭하면 나무위키 설명 볼 수 있습니다.

<div class="grid grid-cols-6 gap-4 text-6xl cascadia">
  <div class="col-start-2 col-end-4">
    <input type="checkbox" class="s-10" name="mbti_1" onclick='checkOnlyOne(this, "mbti_1")' value="I" checked/>I
    <input type="checkbox" class="s-10" name="mbti_1" onclick='checkOnlyOne(this, "mbti_1")' value="E"/>E
  </div>
  <div class="col-start-4 col-end-6">
    <input type="checkbox" class="s-10" name="mbti_2" onclick='checkOnlyOne(this, "mbti_2")' value="N" checked/>N
    <input type="checkbox" class="s-10" name="mbti_2" onclick='checkOnlyOne(this, "mbti_2")' value="S"/>S
  </div>
  <div class="col-start-2 col-end-4">
    <input type="checkbox" class="s-10" name="mbti_3" onclick='checkOnlyOne(this, "mbti_3")' value="T" checked/>T
    <input type="checkbox" class="s-10" name="mbti_3" onclick='checkOnlyOne(this, "mbti_3")' value="F"/>F
  </div>
  <div class="col-start-4 col-end-6">
    <input type="checkbox" class="s-10" name="mbti_4" onclick='checkOnlyOne(this, "mbti_4")' value="J" checked/>J
    <input type="checkbox" class="s-10" name="mbti_4" onclick='checkOnlyOne(this, "mbti_4")' value="P"/>P
  </div>
</div>

<div class="text-center mt-8">
  <code class="language-plaintext highlighter-rouge">
    <a id="mbti-result-link" class="text-2xl" target="blank" href="https://namu.wiki/w/INTJ">https://namu.wiki/w/INTJ</a>
  </code>
</div>

<style>
  /* @import url(https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css); */
  .text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }
  .gap-4 {
    gap: 1rem;
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6,minmax(0,1fr));
  }
  .grid {
    display: grid;
  }
  .col-end-4 {
    grid-column-end: 4;
  }
  .col-start-2 {
    grid-column-start: 2;
  }
  .col-end-6 {
    grid-column-end: 6;
  }
  .col-start-4 {
    grid-column-start: 4;
  }
  .mt-8 {
    margin-top: 2rem;
  }
  .text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  a#mbti-result-link {
    color: white;
    background: #666;
    padding: 3px;
    text-decoration: underline;
  }

  a#mbti-result-link:hover {
    color: #222;
    border-bottom-color: #222;
  }

  .s-10 {
    width: 3.5rem;
    height: 3.5rem;
  }
</style>

<script>
    function checkOnlyOne(element, name) {
      const checkboxes 
          = document.getElementsByName(name);
      
      checkboxes.forEach((cb) => {
        cb.checked = false;
      })
      
      element.checked = true;
      update_link()
    }
    function update_link() {
      var arr = Array.prototype.slice.call( document.getElementsByTagName('input') )
                                     .filter(x => x.name.includes('mbti'))
                                     .filter(x => x.checked == true)
                                     .map(x => x.value)

      let link = document.getElementById("mbti-result-link");
      link.href = `https://namu.wiki/w/${arr.join('')}`;
      link.innerHTML = `https://namu.wiki/w/${arr.join('')}`;
    }
</script>