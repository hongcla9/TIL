import React from 'react';

const Test8Sub = ({color, name,age,addr, tel, done}) => {
    return (
        <div>
            <p style={{color:color}}>이름 : {name} </p>
            <p>나이 : {age}  </p>
            <p>주소 : {addr} </p>
            <p>전화번호: {tel} </p>
            <p>
                {done === true ? '확인':'취소'}
                /
                {done && '확인1'}
                /
                {done || '확인2'}
            </p>
        </div>
    );
};

Test8Sub.defaultProps = {
    name:'아무개',
    age : 10 ,
    addr:'주소',
    tel :'010-0000-0000',
    color:'pink',
    done: true 
}

export default Test8Sub;