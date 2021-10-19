---
layout: post
title: ! "powershell 폴더 용량 순 나열"
categories: [파워쉘]
excerpt: " "
comments: false
share: false
tags:
  - 파워쉘
date: '2021-10-19 23:05:21'
---

## powershell 폴더 용량 순 나열

```sh
$fso = new-object -com Scripting.FileSystemObject

gci -Directory ` | select @{l='Size'; e={$fso.GetFolder($_.FullName).Size}},FullName ` | sort Size -Descending ` | ft @{l='Size [MB]'; e={'{0:N2} ' -f ($_.Size / 1MB)}},FullName
```

위 명령줄 2줄을 powershell에 복붙해보면 아래와 같이 나온다.

![]({{ site.baseurl }}/assets/posts/computer/powershell_sort_size.png)
