import React, { Component } from 'react';

class Test11 extends Component {
    state = {
        data : [
            {no:1 , name:'홍길동', age:20 , addr:'서울', done:false} ,
            {no:2 , name:'강호동', age:30 , addr:'제주', done:false} ,
            {no:3 , name:'이효리', age:40 , addr:'강원', done:true} ,
            {no:4 , name:'엄정화', age:10 , addr:'전주', done:true} ,
            {no:5 , name:'제시', age:35 , addr:'경남', done:false} ,
            {no:6 , name:'김철수', age:15 , addr:'부산', done:false} ,
            {no:7 , name:'화사', age:30 , addr:'경남', done:false} ,
            {no:8 , name:'김래원', age:80 , addr:'경남', done:false} ,
            {no:9 , name:'나나', age:5 , addr:'경남', done:false} ,
            {no:10 , name:'제시', age:15 , addr:'경남', done:false} ,
        ]
    }
    handleClick1 = ()  => {
        this.setState({
            data: this.state.data.filter( item => item.no !== 1  )
        })
    }
    handleClick2 = ()  => {
        const {data} = this.state 
        this.setState({
            data : data.filter( item => item.no !== 2 )
        })
    }
    handleClick3 = ()  => {
        const {data} = this.state 
        const newData = data.filter( item => item.no !== 3)
        this.setState({
            data: newData 
        })
    }
    handleClick4 = (id)  => {
        this.setState({
            data : this.state.data.filter( item => item.no !== id )
        })
    }
    handleClick5 = (id)  => {
        const {data} = this.state 
        this.setState({
            data : data.filter( item => item.no !== id )
        })
    }
    handleClick6 = (id)  => {
        const { data } = this.state 
        const newData = data.filter( item => item.no !== id )
        this.setState({
            data : newData 
        })
    }

    handleClick7 = (id)  => {
        const {data} = this.state 
        this.setState({
            data : data.map ( item => {
                if( item.no === id ){
                    return {
                        ...item ,
                        name:'이젠',
                        age : 100 ,
                        addr : '서울시 서초구',
                        done: true 
                    }
                }else{
                    return item 
                }
            })
        })
    }
    handleClick8 = (id)  => {
        const {data} = this.state 
        this.setState({
            data : data.map( item => item.no === id ? {...item, name:'김수철'} : item  )
        })
    }
    
    render() {
        const { data } = this.state 
        return (
            <div>
                <p>
                    {/* 삭제 : filter */}
                    <button onClick={this.handleClick1}>1번삭제</button>
                    <button onClick={this.handleClick2}>2번삭제</button>
                    <button onClick={this.handleClick3}>3번삭제</button>
                </p>
                <p>
                    <button onClick={() => this.handleClick4(4)}>4번삭제</button>
                    <button onClick={() => this.handleClick5(5)}>5번삭제</button>
                    <button onClick={() => this.handleClick6(6)}>6번삭제</button>
                </p>
                <p>
                    <button onClick={() => this.handleClick7(7) }>8번수정</button>
                    <button onClick={() => this.handleClick7(8)}>9번수정</button>
                    <button onClick={() => this.handleClick8(9)}>10번수정</button>
                </p>
                <hr/>
                {
                    data.map( item => <p key={item.no}>
                        {item.no}/{item.name}/{item.age}/{item.addr}/
                        {item.done === true ? '참여':'미참여'}
                    </p>)
                }
            </div>
        );
    }
}

export default Test11;