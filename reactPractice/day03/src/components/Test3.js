import React, { Component } from 'react';
import Movies from './api/movies'
import './Test3.css'
import Test3List from './Test3List';

class Test3 extends Component {
    state = {
        movies : Movies
    }

    onRemove = ( id ) => {
        const { movies } = this.state 
        this.setState({
            movies : movies.filter( movie => movie.no !== id )
        })
    }

    render() {
        const { movies } = this.state 

        return (
            <div className="Gallery">
                <Test3List movies = { movies } onRemove = { this.onRemove } />
            </div>
        );
    }
}

export default Test3;