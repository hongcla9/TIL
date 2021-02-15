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
        return (
            <div style={{border:'1px solid', borderColor:this.props.color}}>
                <h1> Test2Sub { this.props.title } </h1>
                <ul>
                    <li>이름 : {this.props.name}  </li>
                    <li>나이 : {this.props.age} </li>
                    <li>주소 : {this.props.addr} </li>
                    <li>전화 : {this.props.tel} </li>
                    <li> {this.props.done === true ? '참' : '거짓'} </li>
                    <li> {this.props.done && '참'} </li>
                    <li> {this.props.done || '거짓'} </li>
                </ul>
                <hr />
                <Test2SubSub 
                     name = { this.props.name }
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
        return (
            <div style={{border:'1px solid' , borderColor:this.props.color}}>
                <h2> Test2SubSub 타이틀 </h2>
                <ul>
                    <li>이름 : {this.props.name } </li>
                    <li>나이 : {this.props.age } </li>
                    <li>주소 : {this.props.addr } </li>
                </ul>
            </div>
        );
    }
}


export default Test2;