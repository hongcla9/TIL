import React, { Component } from 'react';
import PropsTypes from 'prop-types'

class Test1 extends Component {
    render() {
        return (
            <div>
                <Test1Sub 
                    name ='홍길동'
                    age = {20}
                    addr ='서울시 서초구'
                    done = { true }
                    // 속성 = 이벤트함수, state
                />
            </div>
        );
    }
}

class Test1Sub extends Component {
    render() {
        const { name, addr, age , done , color } = this.props 
        return (
            <div>
                <p style={{backgroundColor:color}}>이름:{name}</p>
                <p>나이:{age}</p>
                <p>주소:{addr}</p>
                <p>사용유무:
                    {done === true ? '사용':'미사용'}                    
                </p>
            </div>
        );
    }
}
export default Test1;

Test1Sub.defaultProps = {
    name:'아무개',
    age:0,
    addr:'주소',
    done: true ,
    color:'yellow'
}

Test1Sub.propType = {
    name: PropsTypes.string.isRequired,
    age : PropsTypes.number.isRequired,
    addr: PropsTypes.string,
    done: PropsTypes.bool,
    color:PropsTypes.string
}