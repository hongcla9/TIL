import React, { Component } from 'react';

class Test2 extends Component {    
    render() {
        const msg = '타이틀'
        return (
            <div>
                <Test2Sub 
                    title = { msg }
                    name = '홍길동'
                    age = {20}
                    addr = '서울'
                    tel ='000-0000-1111'
                    done = {true}
                    color ='green'                
                />
            </div>
        );
    }
}

class Test2Sub extends Component {
    render() {
        const {
            color, title ,name, age , addr , tel , done
        }  = this.props
        return (
            <div style={{border:'1px solid', borderColor:color}}>
                <h1> Test2Sub { title } </h1>
                <ul>
                    <li>이름 : {name}  </li>
                    <li>나이 : {age} </li>
                    <li>주소 : {addr} </li>
                    <li>전화 : {tel} </li>
                    <li> {done === true ? '참' : '거짓'} </li>
                    <li> {done && '참'} </li>
                    <li> {done || '거짓'} </li>
                </ul>
                <hr />
                <Test2SubSub 
                     name = { name }
                     age = { 30 }
                     addr = '제주'             
                     color = 'pink'
                />
            </div>
        );
    }
}

class Test2SubSub extends Component {
    render() {
        const {
            color , name , age , addr 
        } = this.props 
        return (
            <div style={{border:'1px solid' , borderColor:color}}>
                <h2> Test2SubSub 타이틀 </h2>
                <ul>
                    <li>이름 : {name } </li>
                    <li>나이 : {age } </li>
                    <li>주소 : {addr } </li>
                </ul>
            </div>
        );
    }
}


export default Test2;