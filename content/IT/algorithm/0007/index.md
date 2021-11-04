---
emoji: 👨‍💻
title: 0007 > 파이썬 함수선언
date: '2021-03-26 17:44:00'
author: 도일
tags: python algorithm
categories: IT algorithm
---
![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image.png)

백준 알고리즘에서 말하길 함수를 쓰면 코드가 깔끔해진다고 한다.



말 그대로, 자주 쓸 것 같은 기능들을 함수로 구현해놓으면 재사용이 가능하다.

파이썬에서 함수 선언하는 법은 매우 간단하다.
```python
def 함수이름(매개변수) : 
    함수내용... 
    return 리턴값
```
def라는 키워드로 함수선언임을 알리고(영어단어 Define : 정의하다 에서 따옴)

함수이름과 들어가는 매개변수를 적어주면 된다.

그리고 return없이 그냥 함수를 종료하면 void함수가 된다.

리턴값을 한 개 이상 줄 수 있다는 것이 특징

```python
def test(a,b,c) :
    resultPlus = a+b+c
    resultMult = a*b*c
    return resultPlus,resultMult

x,y = test(1,2,3)

```



 리턴값이 반드시 한 개인 것이 아니다.

리턴값이 없을 수도 있고, 여러개의 리턴값이 나올 수도 있다.

다만 예를들어 리턴값이 2개이면 이를 받을 2개의 변수가 필요하므로

함수를 구성할 때 이를 고려할 필요가 있다.

![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572085.png)

또한, 함수의 선언은 함수의 사용하는 시점보다 앞서야 한다.

무슨말이냐 하면 아래 사진처럼

![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572086.png)

함수를 쓰고나서 그 후에 이 함수가 무엇인지 정의해줘도

프로그램은 이 함수의 의미를 모른다.

그러므로 함수를 미리 선언해주고 사용하자



파이썬은 컴파일러 방식이 아니라 인터프리터 방식이기 때문임을 생각하면 당연한 결과다.

쉽게 말하자면 코드 전체를 보는 것이 아니라, 한줄 씩 보고 판단하기 때문이라고 생각하면 된다.



> 파이썬 함수선언

![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572087.png)

백준 알고리즘 [15596#](https://www.acmicpc.net/problem/15596)



함수 선언하는 방법을 익히기 위해 만든 문제같다.



![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572088.png)

이렇게 solve라는 함수를 만들어주고 제출하면 끝

![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572089.png)





> 셀프 넘버

![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572090.png)

백준 알고리즘 [4673#](https://www.acmicpc.net/problem/4673)





d(n)은 n과 n의 각 자리수를 더하는 함수 => 이부분을 함수로 우선 구현해보자

![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572091.png)

각 자리의 수를 분리하기 위해 n은 우선 문자열로 입력을 받는다.

result는 입력받은 수와, 각 자리의 수를 더한값이다.

여기까지는 어렵지 않게 올 수 있다.



그러나 이를 구하는 것이 아니라 생성자가 없는 숫자를 셀프넘버라 부르는 것을

어떻게 해석해야 하는지가 숙제였다.



생성자가 없다는 의미가 쉽게 다가오지 않았다.

다만, 하나의 생성자로 무한수열을 만들 수 있다는 말이라면

최초의 셀프넘버를 기준으로 수열을 만들 수 있지 않을까?



1은 셀프넘버인데, 다른 수들의 생성자가 될 수 있다는 의미이기도 하다.

이 셀프넘프를 제1항(생성자)으로 하여 수열 d(n)을 만들어 낸 후,

해당 수열에 존재하지 않는 값들은 셀프넘버라고 봐도 되지 않을까?



정리하자면 다음과 같다.



\1) 1을 생성자로 하여 수열을 만들어냄

\2) 1부터 차례대로 이 수열에 존재하는지 확인해보고, 존재하지 않으면 셀프넘버



이제 해당 값이 배열에 들어있는지 확인하는 함수를 만들 필요가 있겠다.

![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572092.png)



이렇게 함수들을 정의해주고,

1부터 10000까지 수열을 만들면서 확인해주면 된다.

![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572093.png)

d(n) 함수는 문자열로 입력받는 것으로 정의하였기 때문에

정수를 문자로 변환하여 넘겨준다. 그리고 그 결과를 수열에 넣어준다. 

그러면서 1부터 차례로 수열에 존재하는지 확인해보고

존재하지 않는다면 (셀프넘버라면) print 해주는 것이다.

수열을 생성하고, 다시 1부터 차례로 셀프넘버 확인해보아도 되지만

수열을 만들면서 차례로 확인하는 것도 가능할 것 같아서

두번 일하지 않도록 한 반복문에서 처리하게 하였다.



![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\question1.gif)



![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572095.png)



> 한수

![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572096.png)

백준 알고리즘 [1065#](https://www.acmicpc.net/problem/1065)



한수라는 것을 처음 들어보았다.

한수란, 각 자리의 수가 등차수열을 이루는 수라는 뜻이다.

예를들어 123이면, 각 자리의 수가 1, 2, 3 으로 공차가 1인 등차수열을 이루므로 한수라 할 수있다.

그럼 한수인지 알기위해서는

우선 등차수열인지 아닌지 확인해주는 함수를 정의할 필요가 있겠다.

등차수열은 어떻게 확인할까?

첫째항과 둘째항의 차이를 구하고 그 이후의 항들도 똑같은 등차를 가지는지 확인해보면 될 것이다.

처음부터 끝까지 확인하되,중간에 한번이라도 등차가 아니면 

이 경우에는 등차수열이 아니므로 등차수열이 아니라는 것을 알려주고

함수를 빠져나오도록 하면 될 것 같다.



\1) 등차수열인지 확인하는 함수

![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572097.png)

둘째항과 첫째항의 차를 등차인 d라고 하고

첫째항부터 끝째항까지 다 확인해서 모든 항이 등차를 이루는지 확인해보고 참,거짓 여부를 리턴해준다.



\2) 한수인지 확인하는 함수

100미만의 수(최대 두자리 수)는 항상 등차를 이룬다.

원소의 갯수가 두개이면 항상 등차라고 봐야하기 때문이다.

그렇기 때문에 항상 한수라고 해야한다.

비교할 값이 적어도 3개는 되어야 등차인지 아닌지 확인해볼 수 있다.

![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572098.png)





그다음 문제에서 요구하는대로 

첫째줄에 값을 입력하면

1~입력값 까지의 한수의 갯수를 세어가지고 출력해주면 된다.

카운팅 하기 위해서는 카운팅변수를 0으로 맞춰놓고

조건에 해당될때마다 +1 해주면 된다.

![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-163600823572199.png)



![img](C:\Users\wellconn\Desktop\doil\github_blog\d0iloppa.github.io\content\img\image-1636008235721100.png)