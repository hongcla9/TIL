# 숫자형

# 파이썬 지원 자료형
"""
int : 정수
float : 실수
complex : 복소수
bool : 불린
str : 문자열(시퀀스)
시퀀스를 담으면 데이터가된다
list : 리스트 ( 시퀀스)
tuple : 튜플(시퀀스)
set: 집합
dic:사전
"""


# 데이터 타입
import math
str1 = "파이썬"
bool = True
str2 = "아나콘다"
float_v = 10.0
int_v = 7
list = [str1, str2]

print(list)
# 리스트는 배열로
# 딕셔너리는 중괄호로 시작
dict = {
    "name": "maching learning",
    "version": 2.0

}
# 튜플은 소괄호 대,중,소괄호 가능  , set 중괄호 [] => 대괄호 {} 중괄호 ()소괄호
# 튜플은 괄호없어도 출력 가능
tuple = (7, 8, 9)
set = {3, 5, 7}
# 데이터 타입 출력
print(type(str1))
print(type(int))
print(type(bool))
print(type(list))
print(type(dict))

# 숫자형 연산자
"""
+
-
*
/
// => 몫 반환
% => 나머지
abs(x) : 절대값
pow (x,y) 엑스의 와이제곰 x**y 도 가능 

"""

# 정수선언
i = 77
i2 = -14
big_int = 44444444444444444444444444444444666666666666666

# 정수 출력
print(i)
print(i2)
print(big_int)

# 실수 출력
f = 0.99999
f2 = 0.3333
f4 = -2.3

print(f)
print(f2)
print(f4)


# 연산실습
i1 = 39
i2 = 939
big_int1 = 333333333333
big_int2 = 3333333333366666666
f1 = 3.342424
f2 = 3.1212

# +
print(">>>>>+")
print("i1+i2:", i1+i2)
print("f1+f2:", f1+f2)
print("big_int1+big_int2:", big_int1+big_int2)


# t 서로 다른 형을 계산하면 형변환이 일어난다
# ex ) 정수 + 실수 => 실수

# 형변환실습
a = 3.
b = 6
c = .4
d = 12.5

#
print(type(a))
print(type(b))
print(type(c))
print(type(d))

# 형변환하는법
print(float(b))
print(int(c))
# 0이나옴 -- > 정수로 바꾸기때문에
print(int(False))
# 참은 1 거짓은 0
print(float(False))
print(complex(3))
print(complex('3'))
# 문자열을 넣어도 숫자열로 바쑨다음에 복소수로 나옴
# 복소수로 변환되어 나옴
print(complex(False))

# 수치연산함수
# abs 는 절대값을 돌려준다 즉 7이나옴
# 100을 8로 나눈후 몫은 12가 되고 나머지는 4가된다는 출력이 됨
print(abs(-7))
x, y = divmod(100, 8)
print(x, y)
# 5의 세제곱
print(pow(5, 3), 5**3)

# 외부모듈
# 임포트 math 를 해서 pi 를 갖고오면 원주율이 나옴
print(math.pi)
print(math.ceil(5.1))
# 5.1보다 큰것중 정수를 따지는법 , 6이 출력됨
