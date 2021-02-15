import React, { Component } from 'react';

class Test4 extends Component {
    //클래스 영역  -> this
    handleClick1 = () => {
        alert('test1')
    }
    handleClick2 = () => {
        alert('test2')
    }
    handleClick3 = () => {
        alert('test3')
    }

    handleClick4 = (num) => {
        alert( num )
    }

    render() {
        return (
            <div>
                <h2> 이벤트 </h2>
                <p>
                    <button onClick={this.handleClick1}>클릭1</button>
                    <button onClick={this.handleClick2}>클릭2</button>
                    <button onClick={this.handleClick3}>클릭3</button>
                </p>
                <p>
                    <button onClick={ () => {
                        alert('여러줄 출력방법')
                    }} >클릭1</button>
                    <button onClick={ () => alert('test')}>클릭2</button>
                    <button onClick={ () => alert('test')}>클릭3</button>
                </p>
                <p>
                    {/* 값전달할경우 함수로 한번 묶어준다 */}
                    <button onClick={() => this.handleClick4(100)}>클릭1</button>
                    <button onClick={() => this.handleClick4(200)}>클릭2</button>
                    <button onClick={() => this.handleClick4(300)}>클릭3</button>
                </p>
            </div>
        );
    }
}

export default Test4;