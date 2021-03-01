import React, { Component } from 'react';

class Test7 extends Component {
    nameInput = null 
    state = {
        name :'', age:'' , addr:''
    }
    onChange = (e)  => {
        const { name , value } = e.target 
        this.setState({
            [ name ] :  value 
        })
    }
    /*
    onChange = (e)  => {
        this.setState({
            [e.target.name] : e.target.value 
        })
    }
    */
    onReset = () => {
        this.setState({
            name:'' , age:'' , addr:''
        })
        this.nameInput.focus();
    }

    render() {
        const { name, age , addr } = this.state 
        return (
            <div>
                <input type="text" onChange = { this.onChange } value={name} name="name" ref={ ref => {this.nameInput = ref}} />
                <input type="text" onChange = { this.onChange } value={age} name="age" />
                <input type="text" onChange = { this.onChange } value={addr} name="addr"/>
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