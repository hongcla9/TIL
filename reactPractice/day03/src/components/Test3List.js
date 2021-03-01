import React, { Component, Fragment } from 'react';
import Test3Item from './Test3Item';

class Test3List extends Component {
    render() {
        const { movies, onRemove } = this.props 
        return (
            <>
                {
                    movies.map( movie => <Test3Item key={ movie.no } 
                        movie={movie}  onRemove = { onRemove } />)
                }
            </>
        );
    }
}

export default Test3List;

// Fragment ->  {Fragment}
// <> </>