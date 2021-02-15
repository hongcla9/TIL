import React, { Component } from 'react';

class Test2 extends Component {
    render() {
        //js영역 
        const title ='신상명세서'
        const name='홍길동'
        const age = 20
        const addr ='서울'
        const tel ='010-0000-1111'
        const sex ='남자'
        return (
            <div>
                <h1>jsx영역</h1>
                <h2> {title} </h2>
                <ul>
                    <li>이름 : {name} </li>
                    <li>나이 : {age} </li>
                    <li>주소 : {addr} </li>
                    <li>연락처 : {tel} </li>
                    <li> 성별 : {sex} </li>
                </ul>
                //지금은 jsx 문법 연습중 
                /* 설명달기 */

                {/* 설명달기  */}
                <p
                    //자바스크립트 설명 
                    /* 여러줄 주석 */
                >
                    나는 자바스크립트
                </p>
                {/* jsx :javascript + XML  */}
            </div>
        );
    }
}

export default Test2;