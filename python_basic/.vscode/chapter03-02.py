# 문자열 생성
str1 = "i am python"
str2 = " am python"
str3 = "python"
str4 = "thon"

print(type(str1), (type(str2)))
print(len(str1), (len(str2)))
# 글자수의 길이를 구해줌

# 빈문자열
str1_t1 = ''
str2_t2 = str()

print(type(str1_t1), len(str1_t1))

# 이스케이프 탈출문자 사용
# i'm boy

print("i'm body")
# 역슬래시를 사용하면 뒤에있는 특수기호를그대로 사용가능
print('i\'m body')
# tab 키만틈 간격이 벌어진다
print('a\t b')
# 줄바꿈
print('a\n b')
# 따옴표 두개 그대로 출력 가능...
print('a\"\" b')

escape_str1 = "do not have a \"retro games\"?"
print(escape_str1)

escape_str2 = 'what\'s on tv?'
print(escape_str2)

# 탭=> 간격 벌어짐 , \n = >  줄바꿈
t_s1 = "click \t start!"
t_s2 = "click \n start!"
print(t_s1)
print(t_s2)

# row string
# 역슬러시를 신경안씀 => 즉 역슬래시를 같이 출력하게 도와준다
raw_s1 = r'D:\PYTHON\TEST'
print(raw_s1)

# 멀티라인 입력
# 여러줄에 걸쳐 한번에 입력하는것
multi_str = \
    '''''
문자열
멀티라인입력
테스트
'''''
print(multi_str)


# 문자열 연산
str_o1 = "python"
str_o2 = "seoul"
str_o3 = "busan"
str_o4 = "apple"

print(str_o1 * 3)
print(str_o1 + str_o2)
# 알파벳 y가 str o1에 있는가?true 로 나옴
print('y' in str_o1)
print('n' in str_o1)
print('p' not in str_o1)

# 문자열 형변환
# 문자열로 바꿈
print(str(66), type(str(66)))
print(str(19.1))
print(str(True), type(str(True)))

# 문자열 함수(upper, isalnum , startwith , count , endswitch)

print("Capitalize:", str_o1.capitalize())
# 앞의 글자를 대문자로 바꿔줌
print("endswith?:", str_o1.endswith("e"))
# e로 끝나는지 묻는다 => 출력할때 true or false 로 출력//endswith?: False
print("replace:", str_o1.replace("thon", "good"))
# thon 이란 글자를 good으로 바꿔줌/replace: pygood
print("sorted:", sorted(str_o1))
# sorted: ['h', 'n', 'o', 'p', 't', 'y'] 리스트형태로 반환된다
print("split:", str_o1.split('p'))
# 결과값 split: ['', 'ython']

# 반복(시퀀스)
im_str = "goodboy"
print(dir(im_str))  # __iter__

for i in im_str:
    print(i)

# 슬라이싱
str_s1 = "nice python"

# 슬라이싱 연습
print(str_s1[0:3])
# 출력은 0 1 2 ->3개가 나온다 무조건-1
print(str_s1[5:11])
print(str_s1[5:])  # [5:11]
print(str_s1[:len(str_s1)])  # str_s1[11]
print(str_s1[:len(str_s1)-1])  # str-_s1[:10]
print(str_s1[1:4:2])  # 1부터 4까지 가져오는데 2칸씩 띄우고 가져와라 == ie
print(str_s1[1:9:2])  # 1부터 9까지 가져오는데 2칸씩 띄우고 가져와라 == iept
print(str_s1[-5:])  # 뒤에서부터 -1 -2 -3 -4-5
print(str_s1[-4:-2])  # th 출력
# ice pyth 출력 첫번째 문자열 부터 -2문자열까지 즉, len의길이로 자르기때문에 +1한다고생각한다.
print(str_s1[1:-2])
print(str_s1[::-1])  # 역으로 출력해줌 nohtpy ecin 으로 나온다
print(str_s1[::2])  # 두칸씩 띄어서 출력 nc yhn

# 아스키 코드
a = 'z'
print(ord(a))  # 122 가 출력된다
print(chr(122))  # a가 출력된다
