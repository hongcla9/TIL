import React, { Component } from 'react';

class Test7 extends Component {
    //클래스 영역 -> this
    handleClick1 = () => {
        alert('연습')
    }
    handleClick2 = ()  => {
        alert('연습중')
    }
    handleClick3 = ()  => {
        alert('연습중 입니다. ')
    }

    render() {
        return (
            <div>
                <p>
                    <button onClick={this.handleClick1}>클릭1</button>
                    <button onClick={this.handleClick2}>클릭2</button>
                    <button onClick={this.handleClick3}>클릭3</button>
                </p>
            </div>
        );
    }
}

export default Test7;