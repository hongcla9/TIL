# 기본출력
import sys
print('python start')
print("python start")
print("""python start""")
# separator 옵션
print('p', 'y', 't', sep=',')
print('101', '35353', '439492', sep='-')
print('python', 'google.com', '439492', sep='@')
# sep? ''공백을 붙여주겠다 - > pyt 가 출력된다 콤마일시 각각의 알파벳에 콤마를 붙여준다.

# end 옵션  end옵션을 사용하면 뒤에 print와 이어지며 출력
print('welcome to', end='     ')
print('it news', end='')
print('website')
print()

# file 옵션 print 한 내용을 지정한 file 에 쓰는것
#print('learn python', file='test.txt')
print()
# format 사용 (d(정수3),s(문자열),f(실수3.998))
print('%s %s' % ('one', 'two'))
print('{} {}' .format('one', 'two'))
print('{1} {0}' .format('one', 'two'))
print()

# %s 10은 자릿수를 의미한다 왼쪽부터 공백을 채우고 나이스 4글자를 채운다
print('%10s' % ('nice'))
print('{:>10}' .format('nice'))
# {:>10} 10자리를 확보하겠다는 의미, %10s 와 같다 여기서 s는 문자열을 의미.

print('%-10s' % ('nice'))
print('{:10}' .format('nice'))
# 오른쪽부터 입력하고 공백을 채우겠다는 의미 양수일경우 왼쪽, 음수일경우 오른쪽부터 글자를채움

print('{:_>10}' .format('nice'))
# 공백을 언더바로 채움
print('{:^10}' .format('nice'))
# ^을 이용하여 가운데정렬
print('%.5s' % ('studychapter'))
# .을 이용하면 5글자 이상인 글자를 자른다. study 만 출력됨 공간은 5개
print('{:10.5}' .format('chapterstudy'))
# 총 열글자 중에 다섯글자만 나오라는 의미, 공간은 10개지만 5글자만 출력.


# %d - > 정수
print('%d %d' % (1, 2))
print('{} {}' .format(1, 2))
print()

# 4자리에서 왼쪽엔 공백을 채우고 숫자를 입력한다는 의미
print('%4d' % (42))
print('{:4d}' .format(42))

# %f
print('%1.18f' % (3.5353353534232))
print('{:1.15f}' .format(3.5353353534232))
# 정수부분 1개만 나오고 18째자리까지 나오게하라는 의미
print('%06.2f' % (3.424242424))
print('{:06.2f}' % (3.424242424))
# 여섯개의공간에서 정수를입력하고 소숫점둘째자리까지입력하도록 함. 003.42의 결과가 나온다

# 정리 문자열일경우 s를 굳이 붙이지 않아도 되지만 실수f 나, 정수d 일경우는 꼭 붙여줘야한다.
