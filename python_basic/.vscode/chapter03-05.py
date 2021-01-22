# Chapter03-5
# 파이썬 딕셔너리
# 범용적으로 가장 많이 사용
# 딕셔너리 자료형(순서X, 키 중복X, 수정O, 삭제O)

# 선언
a = {'name': 'Kim', 'phone': '01012345678', 'birth': '870124'}
b = {0: 'Hello python!'}
c = {'arr': [1, 2, 3, 4]}
d = {
    'Name': 'Niceman',
    'City': 'Seoul',
    'Age': '33',
    'Grade': 'A',
    'Status': True
}
e = dict([
    ('Name', 'Niceman'),
    ('City', 'Seoul'),
    ('Age', '33'),
    ('Grade', 'A'),
    ('Status', True)
])

f = dict(
    Name='Niceman',
    City='Seoul',
    Age='33',
    Grade='A',
    Status=True
)
# d ,c ,f가능은하지만 f가 가장 편리
print('a - ', type(a), a)
print('b - ', type(b), b)
print('c - ', type(c), c)
print('d - ', type(d), d)
print('e - ', type(c), e)
print('f - ', type(c), f)
# 모두 딕셔너리 타입이 나오고 출력이 같다
# 출력
print('a - ', a['name'])  # 존재X -> 에러 발생
print('a - ', a.get('name'))  # 존재X -> None 처리
print('b - ', b[0])
print('b - ', b.get(0))
print('c - ', c['arr'])
print('c - ', c['arr'][3])
print('c - ', c.get('arr'))
print('d - ', d.get('Age'))
print('e - ', e.get('Grade'))
print('f - ', f.get('City'))

# 딕셔너리 추가
a['address'] = 'seoul'
print('a - ', a)
a['rank'] = [1, 2, 3]
print('a - ', a)

# 딕셔너리 길이
print(len(a))
print(len(b))
print(len(d))
print(len(e))

# dict_keys, dict_values, dict_items : 반복문(iterate) 사용 가능
# dict_keys(['name', 'phone', 'birth', 'address', 'rank'])
print('akey - ', a.keys())
print('bkey - ', b.keys())  # dict_keys([0])
print('ckey - ', c.keys())  # dict_keys(['arr'])
# dict_keys(['Name', 'City', 'Age', 'Grade', 'Status'])
print('dkey - ', d.keys())

print('a - ', list(a.keys()))  # ['name', 'phone', 'birth', 'address', 'rank']
print('b - ', list(b.keys()))  # [0]
print('c - ', list(c.keys()))  # ['arr']
print('d - ', list(d.keys()))  # ['Name', 'City', 'Age', 'Grade', 'Status']

# dict_values(['Kim', '01012345678', '870124', 'seoul', [1, 2, 3]])
print('a - ', a.values())
print('b - ', b.values())  # dict_values(['Hello python!'])
print('c - ', c.values())  # dict_values([[1, 2, 3, 4]])
print('d - ', d.values())  # dict_values(['Niceman', 'Seoul', '33', 'A', True])

# ['Kim', '01012345678', '870124', 'seoul', [1, 2, 3]]
print('a - ', list(a.values()))
print('b - ', list(b.values()))  # ['Hello python!']
print('c - ', list(c.values()))  # [[1, 2, 3, 4]
print('d - ', list(d.values()))  # ['Niceman', 'Seoul', '33', 'A', True]

# dict_items([('name', 'Kim'), ('phone', '01012345678'), ('birth', '870124'), ('address', 'seoul'), ('rank', [1, 2, 3])])
print('a - ', a.items())
print('b - ', b.items())  # dict_items([(0, 'Hello python!')])
print('c - ', c.items())  # dict_items([('arr', [1, 2, 3, 4])])
# dict_items([('Name', 'Niceman'), ('City', 'Seoul'), ('Age', '33'), ('Grade', 'A'), ('Status', True)])
print('d - ', d.items())

# [('name', 'Kim'), ('phone', '01012345678'), ('birth', '870124'), ('address', 'seoul'), ('rank', [1, 2, 3])]
print('a - ', list(a.items()))
print('b - ', list(b.items()))  # [(0, 'Hello python!')]
print('c - ', list(c.items()))  # [('arr', [1, 2, 3, 4])]
# [('Name', 'Niceman'), ('City', 'Seoul'), ('Age', '33'), ('Grade', 'A'), ('Status', True)]
print('d - ', list(d.items()))

print('apop - ', a.pop('name'))  # Kim
print('b - ', b.pop(0))  # Hello python!
print('c - ', c.pop('arr'))  # [1, 2, 3, 4]
print('d - ', d.pop('City'))  # Seoul

print('f - ', f.popitem())  # ('Status', True)
print('f - ', f.popitem())  # ('Grade', 'A')
print('f - ', f.popitem())  # ('Age', '33')
print('f - ', f.popitem())  # ('City', 'Seoul')
print('f - ', f.popitem())  # ('Name', 'Niceman')
# 예외
# print('f - ', f.popitem())

print('a - ', 'name' in a)  # False a 가 들어가있으면 fase 없으면 true
print('a - ', 'addr' in a)

# 수정
f.update(Age=36)

temp = {'Age': 27}

print('f - ', f)

f.update(temp)

print('fupdate- ', f)  # {'Age': 27}
