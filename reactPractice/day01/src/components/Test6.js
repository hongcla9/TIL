import React, { Component } from 'react';

class Test6 extends Component {
    render() {
        return (
            <div>
                <Sub 
                    name='홍길동'
                    age ={ 20 }
                    addr ='서울'
                    color ='pink'
                    tel ='000-0000-000'
                    sex='남자'
                    done = { true }
                />
            </div>
        );
    }
}
class Sub extends Component {
    render() {
        //비구조할당 
        const {
            name , age , addr , color , tel , sex , done
        } = this.props 
        return (
            <div style={{backgroundColor:color}}>
                <h2>자식컴포넌트</h2>
                <ul>
                    <li>이름 : { name }  </li>
                    <li>나이 : { age}</li>
                    <li>주소 : { addr } </li>
                    <li>전화 : { tel } </li>
                    <li>성별 : { sex } </li>
                    <li>참거짓 : { done ? <button>참</button>:<button>거짓</button>} </li>
                </ul>
            </div>
        );
    }
}

/*
class Sub extends Component {
    render() {
        return (
            <div>
                <h2>자식컴포넌트</h2>
                <ul>
                    <li>이름 : { this.props.name }  </li>
                    <li>나이 : { this.props.age}</li>
                    <li>주소 : { this.props.addr } </li>
                    <li>전화 : { this.props.tel } </li>
                    <li>성별 : { this.props.sex } </li>
                    <li>참거짓 : { this.props.done ? <button>참</button>:<button>거짓</button>} </li>
                </ul>
            </div>
        );
    }
}
*/

export default Test6;