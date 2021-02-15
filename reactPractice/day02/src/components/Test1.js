import React, { Component } from 'react';

class Test1 extends Component {
    render() {
        const title ='신상명세서'
        const name ='홍길동'
        const age = 20 
        const addr ='서울'
        const done = true 
        const color ='green'
        const style1 = { backgroundColor:'pink', width:400, border:'1px solid', padding:20  }
        return (
            <div>
               <h1>복습 , jsx 문법 </h1> 
               <h2 style={style1}> {title} </h2>
               <ul>
                   <li>이름:{name} </li>
                   <li>나이:{age} </li>
                   <li>주소:{addr} </li>
                   <li> {done === true ? '참':'거짓'} </li>
                   <li> {done && '참'} </li>
                   <li> {done || '거짓'} </li>                   
               </ul>
               {/* 주석 설명달아주기 */}
               <p 
                  //한줄 주석 
                  /* 여러줄 주석 */   
               >
                   연습중 입니다.
                </p> 
            </div>
        );
    }
}

export default Test1;