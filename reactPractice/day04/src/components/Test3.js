import React, { Component } from 'react';

class Test3 extends Component {
    // 생성자 , 리액트에서는 생략해도 자체에 생성자를 포함 
    // state , 이벤트 초기화 
    constructor(props) {
        super(props)
        this.state = {
            name:'홍길동'
        }
        this.handleClick = this.handleClick.bind(this)
        console.log(' 1. constructor ')
    }
    
    handleClick = ()  => {
        this.setState({
            name:'강호동'
        })
    }
    componentDidMount() {
        console.log(' 3. render후 componentDidMount ')
    }
    
    componentDidUpdate(prevProps, prevState) {
        // state, props값이 바뀔때 
        console.log(prevProps, prevState)
        console.log('4.componentDidUpdate ')
    }
    

    render() {
        const { name } = this.state 
        console.log(' 2.render ')
        return (
            <div>
                <h2>이름: {name} </h2>
                <button onClick={this.handleClick}>변경</button>
            </div>
        );
    }
}

export default Test3;