import React, { Component } from 'react';
import Test3Sub from './Test3Sub';

class Test3 extends Component {
    render() {
        return (
            <div>
                <Test3Sub 
                    name = '홍길동'
                    age = { 20 }
                    addr = '서울'
                    tel ='010-0000-3333'
                    sex = '남'
                    done = { true }
                    color = 'green'
                />
                <hr/>
                <Test3Sub 
                    name = '이효리'
                    age = { 30 }
                    addr = '제주'
                />
                <hr/>
                <Test3Sub 
                    addr ='경기'
                    tel = '010-2222-4444'
                />
                <hr/>
                <Test3Sub />
            </div>
        );
    }
}

export default Test3;