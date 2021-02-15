import React, { Component } from 'react';
import Movies from '../api/movies'
import './Test12.css'

class Test12 extends Component {
    state = {
        data : Movies
    }

    handleClick  = ( id )  => {
        const {data} = this.state 
        this.setState({
            data: data.filter( item => item.no !== id )
        })
    }

    delete = (id) => {
        console.log(id)
        const {data}=this.state 
        this.setState({
            data : data.filter(item => item.no !== id)
        })
    }

    render() {
        const { data } = this.state 
        return (
            <div className="Test12">
               {
                   data.map( item =>  <article key={item.no}>
                    <div className="left">
                        <img src={item.poster} alt=""/>
                    </div>
                    <div className="right">
                        <h3>{item.title} </h3>
                        <ul>
                            <li>출연진 : {item.actor}</li>
                            <li>감독 : { item.director } </li>
                            <li>개봉일 : {item.date } </li>                            
                        </ul>
                        <button onClick={() => this.handleClick(item.no)}>제거</button>
                    </div>
                </article> )
               }
            </div>
        );
    }
}

export default Test12;