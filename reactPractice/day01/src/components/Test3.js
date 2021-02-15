import React, { Component } from 'react';

class Test3 extends Component {
    render() {
        const style1 = {
            backgroundColor:'pink', fontSize:30 ,
            color:'green', width:400, height:50,
            lineHeight:'50px' , textIndent:20 
        }
        const style2 = {
            color:'skyblue' , backgroundColor:'yellow',
            lineHeight: '70px', textIndent: 20
        }
        return (
            <div>
                <h1 style={style1}>jsx의 스타일 표기법</h1>
                <h2 style={style2}>지금은 문법 연습</h2>
                <p style={{backgroundColor:'skyblue', width:500, height:100, textAlign:'center', lineHeight:'100px', fontSize:40}}>
                    문단 입니다.
                </p>
            </div>
        );
    }
}

export default Test3;