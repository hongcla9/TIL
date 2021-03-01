import React, { Component } from 'react';

class Test4 extends Component {
    state = {
        count : 0 
    }

    increment1 = () => {
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement1 = () => {
        this.setState({
            count : this.state.count - 1 
        })
    }

    increment2 = ()  => {
        //함수안것은 동시처리 , 일괄처리
        this.setState({
            count : this.state.count + 1
        })
        this.setState({
            count : this.state.count + 1
        })
    }
    decrement2 = ()  => {
        this.setState({
            count : this.state.count -1 
        })
        this.setState({
            count : this.state.count - 1
        })
    }

    increment3 = () => {
       // this.setState( ( state , props ) => { return {} }
       this.setState( prevState  => {
           return {
                count : prevState.count + 1
           }
       })
       this.setState( prevState  => {
           return {
                count : prevState.count + 1
           }
       })
    }
    decrement3 = () => {
        this.setState( state => {
            return {
                count : state.count -1 
            }
        })
        this.setState( state => {
            return {
                count : state.count -1 
            }
        })
    }


    increment4 = ()  => {
        this.setState({
            count : this.state.count + 1
        }, () => this.setState({
            count : this.state.count + 1
        }))
    }
    decrement4 = ()  => {
        this.setState({
            count : this.state.count - 1
        }, () => this.setState({
            count : this.state.count - 1
        }))
    }

    render() {
        const { count } = this.state 
        return (
            <div>
                <h1> { count } </h1>
                <p>
                    <button onClick = { this.increment1 }>증가</button>
                    <button onClick = { this.decrement1 }>감소</button>
                </p>
                <p>
                    <button onClick = { this.increment2 }>2증가</button>
                    <button onClick = { this.decrement2 }>2감소</button>
                </p>
                <p>
                    <button onClick = { this.increment3 }>2증가</button>
                    <button onClick = { this.decrement3 }>2감소</button>
                </p>
                <p>
                    <button onClick = { this.increment4 }>2증가</button>
                    <button onClick = { this.decrement4 }>2감소</button>
                </p>
            </div>
        );
    }
}

export default Test4;