# Chapter03-6
# 집합(Sets) 특징
# 집합(Sets) 자료형(순서X, 중복X)

# 선언
a = set()
b = set([1, 2, 3, 4])
c = set([1, 4, 5, 6])
d = set([1, 2, 'Pen', 'Cap', 'Plate'])
e = {'foo', 'bar', 'baz', 'foo', 'qux'}
f = {42, 'foo', (1, 2, 3), 3.14159}

print('a - ', type(a), a)
print('b - ', type(b), b)
print('c - ', type(c), c)
print('d - ', type(d), d)
print('e - ', type(e), e)
print('f - ', type(f), f)

# 튜플 변환
t = tuple(b)
print('t - ', type(t), t)  # <class 'tuple'> (1, 2, 3, 4)
print('t - ', t[0], t[1:3])  # 1 (2, 3)


# 리스트 변환
l = list(c)  # <class 'list'> [1, 4, 5, 6]
l2 = list(e)  # 1 [4, 5]
print('l - ', type(l), l)  # <class 'list'> [1, 4, 5, 6]
print('l - ', l[0], l[1:3])  # 1 [4, 5]
print('l2 - ', type(l2), l2)  # <class 'list'> ['foo', 'qux', 'baz', 'bar']

# 길이
print(len(a))  # 0
print(len(b))  # 4
print(len(c))  # 4
print(len(d))  # 5
print(len(e))  # 4

# 집합 자료형 활용
s1 = set([1, 2, 3, 4, 5, 6])
s2 = set([4, 5, 6, 7, 8, 9])

print('li - ', s1 & s2)  # {4, 5, 6} 교집합
print('li - ', s1.intersection(s2))  # {4, 5, 6}

print('lu - ', s1 | s2)  # 합집합
print('lu - ', s1.union(s2))  # {1, 2, 3, 4, 5, 6, 7, 8, 9}

print('ld - ', s1 - s2)  # 차집합
print('ld - ', s1.difference(s2))  # {1, 2, 3}

# 중복 원소 확인
print('l - ', s1.isdisjoint(s2))  # 같은게 있으면 false

# 부분 집합 확인
print('l - ', s1.issubset(s2))  # s1은 s2와 부분집합이 있다 있으면 false
print('l - ', s1.issuperset(s2))  # s1은 s2의 부모집합이다 false


# 추가 & 제거
s1 = set([1, 2, 3, 4])
s1.add(5)
print('s1 - ', s1)  # {1, 2, 3, 4, 5}

s1.remove(2)
print('s1 - ', s1)  # {1, 3, 4, 5}
# s1.remove(7)

s1.discard(3)  # {1, 4, 5}
print('s1 - ', s1)

# s1.discard(7)

# 모두 제거
s1.clear()
