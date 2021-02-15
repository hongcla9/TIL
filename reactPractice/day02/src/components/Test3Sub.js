import React, { Component } from 'react';
import PropsTypes from 'prop-types'

class Test3Sub extends Component {
    render() {
        const {
            color , name , age , addr , tel , sex , done 
        } = this.props 
        return (
            <div>
                <ul>
                    <li style={{color:color}}> 이름: {name} </li>
                    <li> 나이: {age} </li>
                    <li> 주소: {addr} </li>
                    <li> 전화: {tel} </li>
                    <li> 성별: {sex }</li>
                    <li> 판별: {done === true ? '참':'거짓'} </li>
                </ul>
            </div>
        );
    }
}
export default Test3Sub;

Test3Sub.defaultProps = {
    name : '아무개' ,
    age : 0 ,
    addr : '지역' ,
    tel : '000-0000-0000',
    sex : '성별여부',
    done : true 
}

Test3Sub.propTypes = {
    name : PropsTypes.string.isRequired , 
    age : PropsTypes.number ,
    addr : PropsTypes.string,
    tel : PropsTypes.string,
    sex : PropsTypes.string,
    done : PropsTypes.bool ,
}