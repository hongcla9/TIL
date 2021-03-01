import React, { Component } from 'react';

class Test6 extends Component {
    state = {
        text : ''
    }

    //event , e 
    onchange = (event) => {
        this.setState({
            text : event.target.value 
        })
    }

    render() {
        const { text } = this.state
        return (
            <div>
                <input type="text" onChange={this.onchange} />
                <h3> {text} </h3>
            </div>
        );
    }
}

export default Test6;