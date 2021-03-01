import React, { Component } from 'react';

class Test7 extends Component {
    state = {
        name :'', age:'' , addr:''
    }

    onChange1 = (e)  => {
        this.setState({
            name : e.target.value 
        })
    }
    onChange2 = (e)  => {
        this.setState({
            age : e.target.value 
        })
    }
    onChange3 = (e)  => {
        this.setState({
            addr: e.target.value 
        })
    }
    onReset = () => {
        this.setState({
            name:'' , age:'' , addr:''
        })
    }

    render() {
        const { name, age , addr } = this.state 
        return (
            <div>
                <input type="text" onChange = { this.onChange1 } value={name} />
                <input type="text" onChange = { this.onChange2 } value={age}/>
                <input type="text" onChange = { this.onChange3 } value={addr}/>
                <button onClick={this.onReset}>초기화</button>
                <br/>
                <br/>
                <p>이름: {name} </p>
                <p>나이: {age} </p>
                <p>주소: {addr} </p>
            </div>
        );
    }
}

export default Test7;