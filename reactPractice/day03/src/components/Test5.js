import React, { Component } from 'react';

class Test5 extends Component {
    //고유값 
    no = 1 
    id = 1 
    state = {
        data1 : [] ,
        data2 : []         
    }

    onAdd1  = ()  => {
        const { data1 } = this.state 
        this.setState({
            data1 : data1.concat({no : this.no++ })
        })
    }
    onAdd2  = ()  => {
        const { data2 } = this.state 
        this.setState({
            data2 : data2.concat({id : this.id++, 
                name:'홍길동'+(Math.floor(Math.random()*10)), 
                age: Math.floor( Math.random() * 50) + 10 })
        })
    }

    render() {
        const { data1 , data2 } = this.state 
        return (
            <div>
                <h3>고유값 만들기</h3>
                <p>
                    <button onClick={this.onAdd1}>고유값1</button>
                    <button onClick={this.onAdd2}>고유값2</button>
                </p>
                <ul>
                    {
                        data1.map( item => <li key={item.no}>{item.no}</li>)
                    }
                </ul>
                <hr/>
                
                <ul>
                   {
                       data2.map( item => <li key={item.id}>
                           {item.id} / {item.name} / { item.age }
                       </li>)
                   }
                 </ul>    
            </div>
        );
    }
}

export default Test5;