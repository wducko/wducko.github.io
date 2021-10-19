---
layout: post
title: ! "jekyll 코드 블럭 변경"
categories: [jekyll]
excerpt: " "
comments: false
share: false
tags:
  - jekyll
date: '2021-10-20 00:36:29'
---

## 출처
<p><code class="language-plaintext highlighter-rouge">출처 - <a href="https://hard-carry.com/how-to-change-syntax-highlighter-in-jekyll/">https://hard-carry.com/how-to-change-syntax-highlighter-in-jekyll/</a></code></p>

## 방법
1. ruby에 다음꺼 치기
```ruby
gem install kramdown rouge
```

2. _config.yml 파일에 아래 내용을 추가합니다.
```yml
markdown: kramdown
kramdown:
  input: GFM
  syntax_highlighter: rouge
```

3. ruby에 다음꺼 치기
```ruby
rougify style base16.monokai.dark > assets/css/syntax.css
```

`짠! 이제 코드 블럭 쓰면 됨.`