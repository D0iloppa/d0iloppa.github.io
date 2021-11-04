---
emoji: 👨‍💻
title: 0002 > 파이썬 숫자 자리수 분리하기, 세로 곱셈 표현하기
date: '2021-03-16 23:18:00'
author: 도일
tags: python algorithm
categories: IT algorithm
---


![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMTky/MDAxNjE1ODk3OTA1ODA0.28zOhWTWnsXqlTod5QHPTZxF8bwDJV5t3-MDrX9kt5sg.pje8EKmibASBseZfKvMUmRM29pPFGZLbiapvJe33OHcg.PNG.kdi3939/image.png?type=w966)

백준 알고리즘 [2588#](https://www.acmicpc.net/problem/2588)



세 자릿수의 곱셈을 수행하는 문제

단순히  A * B의 결과를 출력하는 것이 아니라

세로 곱셈의 원리를 프로그램으로 표현해야 하는 것이다.



쉬워 보이는 문제지만 무려 초등부 올림피아드에 나왔던 문제다...

![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMTMw/MDAxNjE1OTAzMzczMzE4.yv96MlNj2Rk7ueUXAUh4SkL0t5PdQTnSQ3EXPi_GHhUg.qwZ8Tlp9hwsu51jyuVF_lzTsYh0xnU8PCusL8wf2tl8g.PNG.kdi3939/image.png?type=w966)









![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMTA2/MDAxNjE1ODk4NDA5MjM5._wiVk3KatjaVrJfG4od5c_w53FYZGLQ4MA7nAcCCBFYg.92871MKPfVPam7UCdYbagygGJDhpZUn3Bu_L4CXkrpUg.PNG.kdi3939/image.png?type=w966)

계산 자체가 어려운 것은 아니지만, 이를 표현하기 위해서는 수의 각 자릿수를 분리해내야 한다.

우선 (1)~(6)까지 각각의 값들을 num1 ~ num6이라 하겠다.

num1과 num2는 입력, num3~num6은 출력값



중요한 건 num2의 각 자릿수를 분리해야만 나머지 변수들의 값을 계산할 수 있다.

수를 분리해내는 여러 방법이 있겠지만,

나는 1의 자리, 10의 자리, 100의 자리를 각각 분리해와서

하나의 배열에 담아줄 것이다.

그래서 num2는 배열이 되고, num2[0], num2[1], num[2] 이렇게 나뉘며

각각의 의미는 1의 자리 수, 10의 자리 수, 100의 자리 수다.



![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMjc4/MDAxNjE1OTAwNzg1MTg3.aJ6D4pC5eOlg9Lr9ajbcPn081tzhRnpiAhn2ulXjYRMg.gyWM6MVXzrezjBZrhNkbQKst8t-FaPHXAhzRhx6lvDQg.PNG.kdi3939/image.png?type=w966)

첫째 줄에 num1을 입력받고, num2는 비어있는 배열

inNum2는 (2)에서 입력받을 숫자다. 이를 분리하여 num2 배열에 집어넣을 예정

(정수이기 때문에 int() 함수를 꼭 써줘야 한다.)



나머지를 구하는 연산자인 % 연산자를 이용하면 1의 자리를 구할 수 있다.

ex) 123 % 10 = 3



위 코드에서 비어있는 배열을 선언하는 방법은 보았고,

이 배열에 추가하는 방법을 알 필요가 있겠다.

바로 append() 함수를 쓰면 된다.



![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMTgg/MDAxNjE1ODk5MTgwNTA5.MSWoKzzucsDFQtsvKtgKG1YjdEjK4KMCJ_GHtig4B-Ug.UPdu7TrSbOvCf34sZ2O18kb5gYkRGWlKtwVFE7ShQ-sg.PNG.kdi3939/image.png?type=w966)

이로써 num2의 첫 번째 칸에는 1의 자리를 넣었다.

10의 자리는 어떻게 얻을까?

주먹구구식으로 한다면

1의 자리 숫자를 알기 때문에 100으로 나누었을 때의 나머지에서 1의 자리 숫자를 빼면 된다.

그리고 그 수는 10의 자리 수가 되고

마찬가지로 1000으로 나누었을 때의 나머지에서 1의 자리 숫자, 10의 자리 숫자를 빼면 100의 자리 숫자가 된다.

그러나 100의 자리 숫자가 제일 앞에 있으므로 굳이 1000으로 나누지 않고 바로 빼도 결과는 똑같다.

![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMjE2/MDAxNjE1OTAwMDQ3NjU5.xWmyPlpzpiQi9Bb7_6ad458tGkyH3SqvaiqP13pV-fUg.3GMEXw66sdG9TOGclGMLtQiPo43PrKzlq6o9jbHhNrog.PNG.kdi3939/image.png?type=w966)

의미적으로 보았을 때는 맞는 이야기가 된다.

또한, 이렇게 구해진 숫자들을 바로 집어넣지 않고 

10의 자리는 10으로 한 번 더 나눠주고 

100의 자리는 100으로 한 번 더 나누어 주어야

각 자리의 수가 저장된다.

다만 이 문제에서 요구하는 대로 num3~num6까지 계산할 때,

연산 후 각 자릿수와의 곱에서 10의 자리 숫자 면 곱하기 10,

100의 자리 숫자 면 곱하기 100을 다시 해줘야 하기 때문에 그냥 두어도 되긴 하지만

결론적으로 이런 방식은 너무 비효율적으로 보인다.

자릿수가 늘어나면 늘어나는 만큼 계속 코드가 길어지게 된다.

그러니 이러한 방식은 지양하도록 하자.



프로그래밍을 하려면 조금 더 일반화된 방법론을 찾는 것이 중요하다.

보편의 원리로 적용할 수 있는 방법.. 이것이 바로 알고리즘



10으로 나누면 1의 자리 수(끝자리 수)가 나머지로 남는다는 원리를 이용하여

끝 수를 하나씩 따와가지고 배열에 넣은 다음,

10으로 나누었을 때의 몫만 남겨두는 방식으로 끝자리를 지워준다.

![img](https://postfiles.pstatic.net/MjAyMTAzMTZfNDUg/MDAxNjE1OTAxNTYxNTQ4.ak126rt1RURCJTY9kffUsg1V3Gr9FjwWekNCh_8jxQYg.PcmE5WuFjJ4_n-wuT7WLiyr224w5jwuMu7-OHKR3gisg.PNG.kdi3939/image.png?type=w966)

여기서 다시 끝자리 수를 따와서 배열에 넣는 방식으로

수가 0이 될 때까지 반복하는 반복문을 이용하면 좋을 것 같다.

이렇게 하면 n 자리의 수도 각 자릿수마다 숫자를 따올 수 있다.

말로 설명하자니 복잡한데 코드로는 간결하게 표현할 수 있다.



파이썬에서 몫을 구하는 연산자는 //인데,

나누기 연산자인 /로 실숫값을 구한 후, 이를 정수형으로 변환시켜줘도 되긴 한다.

![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMTEg/MDAxNjE1OTAxNzk4OTE3.Q1-C8zsHXzY5kIG-lF7Ph8YgXknZdNCHKwpBiqcQ-KEg.hUSnCDzXk1sDWA9LJ2_yJct96iqi_P8sEABtJLWg3Skg.PNG.kdi3939/image.png?type=w966)



다시 본론으로 돌아와서,

파이썬에서의 반복문 문법을 알면 방금 말한 내용을 코딩할 수 있다.



자바에서의 while 문의 형태는 이와 같다.

![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMzYg/MDAxNjE1OTAyMDc1ODk3.EySydg9q2dQOJhuxUgEUFPt3AiVVEvHZuF1Y91cEbmYg.7Qx4Hp5kdZU0CM0YorrKng_EeM2mgTlBpKDNInaVcj8g.PNG.kdi3939/image.png?type=w966)

파이썬에서도 이와 유사하며, { } 대신에 : 만 써준다.

다만, 들여 쓰기를 해야만 while 문 { } 안에 있다는 뜻이다.

![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMjQy/MDAxNjE1OTAyMTE5MTc4.AH7WcpzTQQ3pIlB42-TBiVu-210MtsZRHl3239fsG08g.VkRpiIdJzg6XZ4fsPvxxXFRL_8AejpE9KLvXXMqGx8kg.PNG.kdi3939/image.png?type=w966)

이를 정리하면 다음과 같이 코딩할 수 있다.

![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMTM5/MDAxNjE1OTAyMzM2NzEz.iTR7Z6r0MOScCPAOZOGum4MNp6VkPPcDHpYLMBg_qwsg.LBl1Zw5FXAwIx4xjn6-rMyFHzKz86ET-iWfs1IQvAgog.PNG.kdi3939/image.png?type=w966)

num2의 내용을 찍어보면 그 내용도 확인할 수 있다.

![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMjYz/MDAxNjE1OTAyNDgxNDM4.-cXVTJQXHooYid4DGjsuSG7K-WVImRMParVmsh4Gc7sg.LWMWkKsspjVo59SW6eahgs-LgubRuT17bm92qZpIpQ0g.PNG.kdi3939/image.png?type=w966)

파이썬은 편리하게 print() 안에 배열을 입력하면 이렇게 순서대로 출력하게 된다.



즉, 이를 통해 num2[0] 은 1의 자리 수, num2[1]은 10의 자리 수, num2[2]는 100의 자리 수라는 것을 확인할 수 있다.



이제 나머지 num3~num6 구하는 일은 간단하다.

![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMjQz/MDAxNjE1OTAzNDQyOTIw.IN78N-AIpKKX8_7LkKPZ4Bu1IdjGNLhRbSnswKrDctQg._vvZ7L6Llj1PSngQq6aN6__421vuJDl38ow-aFrOr84g.PNG.kdi3939/image.png?type=w966)

num3에서 마지막 * 1은 하지 않아도 상관없으나 1의 자리 수 곱셈 값이라는 것을 표현하기 위해 써놨다.

그리고 print 할 때, 다시 10으로 나누고, 100으로 나누고 하는 것은

문제에서 요구하는 대로 출력 규격을 맞춰주기 위함이다. (자릿수에 의한 0은 빼고 나온다.)

![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMjA0/MDAxNjE1OTAzNTc2NzU2.MZOLHfU2y8wRmxzyMHnVKVOqEWrlZbP7_XsMObi-Cfwg.bxJ7U2AkvTWrCIEWCIoKPEAkOreMG7vWqzjYmcXMGAYg.PNG.kdi3939/image.png?type=w966)

이렇게 하면 이번 문제도 해결



결과는 당연스럽게도,

![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMjkg/MDAxNjE1OTAzNjkwNjE5.Xbp1ERYUelNW6PvxXNnHiquYA0c7KonPfyM95Hqz3Tcg.iRlKJj7ddECuR1sCZIAJ0k5ivamBxSURkNu5aefd_EQg.PNG.kdi3939/image.png?type=w966)





이번 시간에 등장하는 파이썬 문법 정리)



비어있는 배열 선언과 값 입력하는 법

a = [] // 비어있는 배열 선언 a.append() // 배열에 추가



while 문

while(조건식) : >> 반복문 내용





배열의 출력(print)

﻿print(arr)         => [ arr[0], arr[1], ... , arr[n-1] ]

파이썬 연산자 정리

![img](https://postfiles.pstatic.net/MjAyMTAzMTZfMTg4/MDAxNjE1OTA0MjM3NTg5.CeWs6ynCLBFAmQqOzvWt5eLiPHlR4tHUhHLKuRktprMg.MqiNkrDu5FUZe0Dh8pA-yuD2aTSlmbO4h9j_bUBFe-0g.PNG.kdi3939/image.png?type=w966)









![img](https://postfiles.pstatic.net/MjAyMTAzMTdfNDkg/MDAxNjE1OTY3NDU3ODE4.c7UMi97iIKlKuW19Hma9p9b8IFPovkq3Z7qI3QogrOsg.3vjgaNGL-hqaFnwVzqQadkmfAltMvmDNGW8_NEp70Acg.PNG.kdi3939/image.png?type=w966)