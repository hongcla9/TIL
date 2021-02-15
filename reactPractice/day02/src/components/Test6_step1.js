import React, { Component } from 'react';
import './Test6.css'

class Test6 extends Component {
    state ={
        done : false 
    }

    handleClick1 = () => {
        this.setState({
            done:true 
        })
    }
    handleClick2 = () => {
        this.setState({
            done:false 
        })
    }
    handleClick3 = () => {
        this.setState({
            done : !this.state.done 
        })
    }

    render() {
        return (
            <div className="Test6">
                <p className="test">지금은 연습입니다.</p>
                <p className="test on">지금은 연습입니다.</p>
                <p className="on1">지금은 연습입니다.</p>
                <hr/>
                <p className={`test ${this.state.done === true ? 'on':'' }`}>지금은 연습입니다.</p>
                <p className={`${this.state.done === true ? 'on1':''}`}>지금은 연습입니다.</p>                
                <br />
                <br />
                <button onClick={this.handleClick1}>addClass</button>
                <button onClick={this.handleClick2}>removeClass</button>
                <button onClick={this.handleClick3}>toggleaddClass</button>
            </div>
        );
    }
}

export default Test6;