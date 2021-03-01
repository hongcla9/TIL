import React, { Component } from 'react';
import Test2Sub from './Test2Sub';

class Test2 extends Component {
    state = {
        data : [
            {no:1, name:'홍길동', age:20 , done: true },
            {no:2, name:'강호동', age:30 , done: false },
            {no:3, name:'유재석', age:10 , done: true },
            {no:4, name:'이효리', age:40 , done: false },
            {no:5, name:'엄정화', age:15 , done: true },
        ]
    }

    onAdd1 = () => {
        this.setState({
            data : this.state.data.concat({no:6,name:'제시',age:20,done:false})
        })
    }
    onAdd2 = () => {
        const {data} = this.state
        this.setState({
            data : data.concat({no:7,name:'김철수',age:30,done:true})
        })        
    }
    onAdd3 = () => {
        const {data} = this.state
        const newData ={no:8,name:'화사',age:25,done:false}
        this.setState({
            data : data.concat( newData )
        })
    }

    onRemove1 = () => {
        this.setState({
            data : this.state.data.filter( item => item.no !== 1 )
        })
    }
    onRemove2 = () => {
        const {data} = this.state
        this.setState({
            data : data.filter( item => item.no !== 2 )
        })
    }

    onRemove3 = ( id )  => {
        const { data } = this.state 
        this.setState({
            data : data.filter( item => item.no !== id )
        })
    }

    onModify1 = () => {
        const {data} = this.state 
        this.setState({
            data: data.map( item => {
                if( item.no === 1 ){
                   return {
                        ...item ,
                        name:'강호동',
                        age:30 ,
                        done : false 
                   }
                }
                return item 
            })
        })
    }

    onModify2 = ()  => {
        const { data } = this.state 
        this.setState({
            data : data.map( item => {
                if( item.no === 2 ){
                    return {
                        ...item ,
                        name :'아무개' ,
                        age: 40 ,
                        done: true 
                    }
                }
                return item 
            })
        })
    }

    onModify3 = () => {
        const { data } = this.state 
        this.setState({
            data : data.map( item => item.no === 3 ? {...item , name:'김영희',age:20, done:false}:item )
        })
    }

    onModify4 = ( id ) => {
        const { data } = this.state 
        this.setState({
            data : data.map( item => item.no === id ? {...item , name:'유재석',age:30,done:true} : item )
        })
    }

    render() {
        return (
            <div>                
                <ul>
                   {
                       this.state.data.map( item => <li key={item.no}>
                           {item.no} / {item.name} /{item.age}/
                           {item.done===true?'참':'거짓'}
                       </li>)
                   }
                </ul>
                <hr/>
                <p>
                    <button onClick={this.onAdd1}>추가1</button>
                    <button onClick={this.onAdd2}>추가2</button>
                    <button onClick={this.onAdd3}>추가3</button>
                </p>
                <hr/>

                <Test2Sub 
                    onRemove1 = { this.onRemove1 }
                    onRemove2 = { this.onRemove2 }
                    onRemove3  = { this.onRemove3 }

                    onModify1 = { this.onModify1 }
                    onModify2 = { this.onModify2 }
                    onModify3 = { this.onModify3 }
                    onModify4 = { this.onModify4 }
                />   

            </div>
        );
    }
}

export default Test2;