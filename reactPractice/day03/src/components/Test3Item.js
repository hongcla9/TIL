import React, { Component } from 'react';

class Test3Item extends Component {
    render() {
        const { movie, onRemove} = this.props 
        return (
            <article>
                <div className="left">
                    <img src={movie.poster} alt="" />
                </div>
                <div className="right">
                    <h3> {movie.title} </h3>
                    <ul>
                        <li>출연진: { movie.actor } </li>
                        <li>감독: {movie.director} </li>
                        <li>개봉일: {movie.date} </li>
                    </ul>
                    <button onClick={ () => onRemove( movie.no ) }>삭제</button>
                </div>
            </article>
        );
    }
}

export default Test3Item;