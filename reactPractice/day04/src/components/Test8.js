import React from 'react';
import Test8Sub from './Test8Sub';

const Test8 = () => {
    return (
        <div>
            <h2>함수형 props연습</h2>
            <Test8Sub 
                name ='홍길동'
                age = {20}
                addr ='서울시 서초구'
                tel ='010 - 0000 -1111 '
                color ='red'
                done = { true }
            />
            <hr/>
            <Test8Sub
                name ='강호동'
                addr ='제주도'
                tel ='010-1111-2222'
            />
            <hr/>
            <Test8Sub />            
        </div>
    );
};

export default Test8;