
import React, { Component } from 'react';

class Test2 extends Component {
    textRef = React.createRef()
    state = {
        done : false 
    }

    handleToggle = ()  => {
        //toLowerCase() , toUpperCase() 
        const value = this.textRef.current.value 
        this.textRef.current.value = 
            this.state.done ? value.toLowerCase() : value.toUpperCase()
   
        this.setState({
            done : !this.state.done 
        })
        }
    render() {
        return (
            <div>
                <h3>대소문자바꾸기 Ref</h3>
                <input type="text" ref = {  this.textRef }  />
                <button onClick={this.handleToggle}>변환</button>                
            </div>
        );
    }
}

export default Test2;


/*

import React, { Component } from 'react';

class Test2 extends Component {
    textRef = null 
    state = {
        done : false 
    }

    handleToggle = ()  => {
        //toLowrCase() , toUpperCase() 
        const value = this.textRef.value 
        this.textRef.value = 
            this.state.done ? value.toLowerCase() : value.toUpperCase()
   
        this.setState({
            done : !this.state.done 
        })
        }
    render() {
        return (
            <div>
                <h3>대소문자바꾸기 Ref</h3>
                <input type="text" ref = { ref => this.textRef = ref } />
                <button onClick={this.handleToggle}>변환</button>                
            </div>
        );
    }
}

export default Test2;


*/