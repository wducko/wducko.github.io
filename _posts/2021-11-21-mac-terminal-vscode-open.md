---
layout: post
title: ! "mac terminal 에서 code .로 vscode 열기"
categories: [잡담]
excerpt: " "
comments: false
share: false
tags:
  - 잡담
date: '2021-11-21 06:15:11'
---

<p><code class="language-plaintext highlighter-rouge">참고 - <a href="https://withhsunny.tistory.com/57">https://withhsunny.tistory.com/57</a></code></p>


1. terminal을 연다.
2. `vim ~/.bash_profile` 을 친다.
3. `o`를 친다.
4. ```sh
# Add Visual Studio Code (code)
export PATH="\$PATH:/Applications/Visual Studio Code.app/C
```
이 두 줄을 복붙한다.
5. `:` 를 친다.
6. `wq` 를 치고 엔터를 누른다.
7. terminal에서 `code .`를 치고 엔터를 누르면, terminal의 폴더 위치에서 vscode가 열린다.