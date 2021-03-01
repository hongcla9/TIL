import React, { Component } from 'react';

class Test8 extends Component {
    idInput = React.createRef()
    state = {
        userid:'' , userpw : ''
    }

    onChange = (e)  => {
        const { name , value } = e.target
        this.setState({
            [name]: value 
        })
    }
   
    onReset = ()  => {
        this.setState({
            userid:'' , userpw :'' 
        })
        this.idInput.current.focus()
    }

    render() {
        const { userid , userpw } = this.state 
        return (
            <div>
                <input type="text" ref={this.idInput} 
                onChange={this.onChange} 
                value ={ userid }
                name="userid"
                />            
                
                <input type="text" 
                onChange = {this.onChange } 
                value={ userpw }
                name="userpw"
                />
                <button onClick={this.onReset}>초기화</button>            

                <h4> 아이디 : { userid } </h4>
                <h4> 비번 : {userpw} </h4>
            </div>
        );
    }
}

export default Test8;