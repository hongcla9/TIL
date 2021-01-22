# 파이썬 안전 기초
# 파이썬 변수

# 기본 선언
n = 700
print(n * 700)
# 700을 정수 선언함
print(type(n))
# 동시선언 가능
x = y = z = 700
print(x, y, z)

# 선언
var = 75
var = "Change Value"
# 출력, 즉 마지막에 선언된것이 기존의 var를 재할당 하여 change value 가 출력된다.
print(var)
# srt 이라고 출력됨
print(type(var))

# object refrence
# 변수의 값이 할당 상태일때
# .타입에 맞는 오브젝트 생성
# 값생성
# 콘솔 출력
# 예1
print(300)
print(int(300))

# 예2
# n -> 777
# n =777
print(n, type(n))
print()

m = n
# m = 777 <= n 777
# 콤마뒤에 띄어쓰기 해주는것이 좋다
print(m, n)
print(type(n), type(m))

m = 400
print(m, n)

# id(identity) 확인 : 객체의 고유값 확인
# 파이썬내부에서 판단을 해서 id값을 가져온다.
m = 800
n = 655
print(id(m))
print(id(n))
print(id(m) == id(n))
# 결과값은 false

m = 800
n = 800
# 똑같은 값을 이름이 다른 변수가 되어도  파이썬 자체에서는 하나의 오브젝트로 생성한다 즉 true가 나옴
print(id(m) == id(n))

# 다양한 변수 선언방법
# Camel Case : numberOfCollegeGradute => Method 에 사용
# pascal case : NumberOfCollegeGraute => 클래스를 만들때 사용
# Snake Case : number_of_college_graduate

# 허용하는 변수
age = 1
Age = 1
aGe = 1
AGE = 1
a_g_e = 5
_age = 5
age = 5
age_ = 5
_AGE_ = 5

# 예약어는 변수명으로 불가능
# for = 3 -> as, class 등 원래 있던 변수는 불가 break if ramda pass continue 등등
