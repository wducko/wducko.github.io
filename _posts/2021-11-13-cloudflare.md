---
layout: post
title: ! "cloudflare 좋을까?"
categories: [cloudflare]
excerpt: " "
comments: false
share: false
tags:
  - cloudflare
date: '2021-11-13 10:06:14'
---

<iframe width="560" height="315" src="https://www.youtube.com/embed/-AwLsUuzgLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


## aws s3에 대한 경쟁자로 cloudflare가 급부상 한다는 소리를 들었다.
위 영상에서 클라우드 플레어 이야기를 들었고.  
최근에 cloudflare의 TTFB가 나오는 사이트를 몇 번 들어간 적이 있기도해서  
검색을 좀 해봤다.

마음이 가는 서비스는 4개였다.  
1. [https://www.cloudflare.com/ko-kr/products/cloudflare-images/](https://www.cloudflare.com/ko-kr/products/cloudflare-images/)  
10만개 이미지를 저장하는데 5$

2. [https://workers.cloudflare.com/](https://workers.cloudflare.com/)  
서버리스 서버.  
무료 하위도메인 제공. `.dev`  
요청당 최대 10ms cpu 시간.  
매일. call 10만번 무료  
자동 스케일링. 관리할 서버가 없다. 그냥 돌리면 지가 알아서 스케일링에 다 된다고 함.  

3. [https://pages.cloudflare.com/](https://pages.cloudflare.com/)  
공짜 플랜의 경우, 한 달에 500번 빌드 공짜  
무제한 사이트, 무제한 요청, 무제한 대역폭

4. [https://www.cloudflare.com/ko-kr/products/workers-kv/](https://www.cloudflare.com/ko-kr/products/workers-kv/)  
cloudflare의 db 역할  
무료 플랜의 경우  
최대 1gb의 key value 스토리지 공간 제공  
일간 최대 1,000번 쓰기, 삭제, key value 목록 조회.  
일간 최대 10,000번 읽기.  
key 512바이트.  
key value 25mb  
넘어가면.. 자동으로 추가 비용이 드는 구조인가봄.  





## 여기까지만 보면 개쩌는데.. 정말 그런가?
앞서 `TTFB` 라는 이야기를 했었다.  
아마 3번에 해당하는 이야기일텐데.  

![]({{ site.baseurl }}/assets/posts/cloudflare/TTFB.png)  

`TTFB`가 적용된 사이트를 몇 번 새로고침하면 이미지 처럼 뜬다.  
이미지에는 딜레이없이 redirecting 되는 것처럼 써져있지만  
`길게는 10초까지 걸린다.`  

cloudflare가 빠른 페이지표기인 것 처럼 보이지만  
몇 번 새로고침하면 저런 페이지가 나오면서  
굉장히 불쾌한 경험을 준다.

대형 커뮤니티에서 저런게 뜬다고 생각해봐라.. 극혐..

## 그럼 pages.cloudflare 만 제외하면 나머지는 괜찮은가?
최신에는 어떻게 되는지 모르겠지만  
이전 글을 찾아보면  

1. TTFB문제 뿐만 아니라. 가끔가다가 style이 깨져서 텍스트만 보이는 경우가 있다고 하고.  
2. cloudflare-images 의 이미지가 엑박으로 되는 경우도 있고.  
3. SSL이 적용 안 되는 경우가 있다고 한다.  
4. DDoS방어도 무료플랜이 아니라 비지니스 정도는 되어야 실질적으로 해준다는 이야기가 있다.

## 그래서. 옛날 글이고.. 요즘도 그래?
`모른다`.. 안 해봐서..  

하지만 사실 아직도  
[https://www.cloudflare.com/ko-kr/products/cloudflare-images/](https://www.cloudflare.com/ko-kr/products/cloudflare-images/)  
[https://workers.cloudflare.com/](https://workers.cloudflare.com/)  
[https://www.cloudflare.com/ko-kr/products/workers-kv/](https://www.cloudflare.com/ko-kr/products/workers-kv/)  
이 3개는 아직도 끌린다.  

솔직히 쓰면 맛있을 것 같긴한데.. 음..

## 영상을 다시보니..  
`TTFB문제`가 발생하는 page는 다루지 않았다. ㅋ...  
몇 시간동안 뻘짓했넼 앜ㅋㅋ  

애초에 이미지부분과. 영상 마지막에 살짝 나오는 DB 부분은 확실하게 맛있나보다.  

아이유 랜덤 이미지 api나. 짤봇 같은거. 만들면 좋지 않을까? 한다.  

## 결론
cloudflare-images 만 쓸만하다.

vultr로. db와 worker를 훨씬 저렴하게 할 수 있다.  
정확하게는 db의 조회가 하루 천회인게. 어이가 없다.  
vultr로 월간 5.5달러로. 무제한 db조회가 된다.  
또한 이미지 서버가 따로 있어서 이미지 url을 string으로만 뱉어내는 worker라면  
그냥 vultr쓰면 매일 10만건이건 뭐건. 자유롭게 쓰면 된다.

이미지 서버용으로 쓴다면.  
vultr의 제일 싼 걸 써도 worker부분과 db는 클라우드플레어를 이긴다.

`나중에 아이유 사진 api 만들 때,  vultr + cloudflare-images 로 해보자`