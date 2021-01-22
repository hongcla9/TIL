# 파이썬 리스트
# 자료구조에서 중요
# 파이썬 배열 제공 x
# 리스트 자료형은 순서바꾸기O ,중복 O , 수정 O , 삭제 O

# 선언
a = []
b = list()
c = [70, 75, 80, 85]
d = [1000, 10000, 'Ace', 'Base', 'Captine']
e = [1000, 10000, ['Ace', 'Base', 'Captine']]
f = [21.42, 'foobar', 3, 4, 'bark', False, 3.14159]

# 인덱싱
print('>>>>>')
# <class 'list'> [1000, 10000, 'Ace', 'Base', 'Captine']
print('d- ', type(d), d)
print('d-', d[1])  # 10000
print('d- ', d[0], d[1], d[1])  # 1000 10000 10000
print('d- ', d[-1])  # Captine //중첩리스트 0 번째
print('e- ', e[-1][1])  # Base //중첩리스트에서 1번째

# 슬라이싱
print('>>>>>>')
print('d - ', d[0:3])  # 리스트에서 2번째까지 [1000, 10000, 'Ace'] 출력
print('d - ', d[2:])  # ['Ace', 'Base', 'Captine'] 중첩리스트 처음부터 끝까지
# 중첩배열문 에서 첫번째문자(즉 0번째인 Ace 를 제외하고)  ['Base', 'Captine'] 출력
print('e - ', e[2][1:3])
# 리스트 연산
print('>>>>>>')
# 배열끼리 더할 수 있다. c + d -  [70, 75, 80, 85, 1000, 10000, 'Ace', 'Base', 'Captine']
print('c + d - ', c + d)
# 배열 끼리 곱할 수 있다. c * 3 -  [70, 75, 80, 85, 70, 75, 80, 85, 70, 75, 80, 85]
print('c * 3 - ', c * 3)

print("'Test' + c[0] - ", 'Test' + str(c[0]))  # 'Test' + c[0] -  Test70

# 값 비교
print(c == c[:3] + c[3:])  # True

# 같은 id 값
temp = c
print(c == temp)  # True
print(id(temp), id(c))  # 2290147948672 2290147948672

# 리스트 수정, 삭제
print('>>>>>>')
c[0] = 4  # [4, 75, 80, 85] (c 의 0번째에 4를 추가해줘)
print('c - ', c)  # [4, 'a', 'b', 'c', 80, 85] 추가가능
c[1:2] = ['a', 'b', 'c']  # 첫번째 자리에 배열을 추가해줘
print('c - ', c)  # 추가 가능
c[1] = ['a', 'b', 'c']  # 첫번째 자리에 중첩배열문이 추가됨
print('c - ', c)  # [4, ['a', 'b', 'c'], 'b', 'c', 80, 85]
c[1:3] = []  # 첫번째자리에 (중첩배열) 3번째까지 없애줘
print('c - ', c)  # [4, 'c', 80, 85]
del c[3]  # 세번째 자리에 있는 수를 빼줘
print('c - ', c)

# 리스트 함수
print('>>>>>>>>')
a = [5, 2, 3, 1, 4]
a.append(6)  # 리스트 마지막에 6원소 추가
print('a - ', a)
a.sort()       # 정렬 1,2,3,4,5,6 ..
print('a - ', a)
a.reverse()  # 거꾸로 정렬 6 ,5,4,3,2,1
print('a - ', a)
print('ac - ', a.index(5))  # 다섯번째 문자를 갖고와줘 - > 1
a.insert(2, 7)  # 두번째자리에 7을 추가줘
print('a - ', a)
a.reverse()  # 거꾸로
a.remove(1)
print('a - ', a)
print('a - ', a.pop())  # 마지막원소 튕기기6
print('a - ', a.pop())  # =>  마지막원소 튕기기 5
print('a - ', a)  # [2, 3, 4, 7]
print('a3 - ', a.count(4))  # 몇개의 원소가 있는지 4
ex = [8, 9]  # ex라는 리스트안에 8,9를 넣음
a.extend(ex)  # a라는 리스트에 ex 추가
print('a - ', a)
## [2, 3, 4, 7, 8, 9]
# 삭제 remove, pop, del
