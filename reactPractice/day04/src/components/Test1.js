import React, { Component } from 'react';

class Test1 extends Component {
    idRef = React.createRef()
    state = {
        id :'' , pw :''
    }
    handleChange = (e) => {
        const {name , value} = e.target 
        this.setState({
            [name]: value             
        })
    }
    handleClick = () => {
        this.setState({
            id:'' , pw :''
        })
        this.idRef.current.focus()
    }
    render() {
        const { id , pw } = this.state 
        return (
            <div>
                <h2>주말문제</h2>
                <input type="text" name="id" value={id} onChange={this.handleChange} ref={this.idRef} />
                <input type="password" name="pw" value={pw} onChange={this.handleChange}/>

                {
                    pw.length > 6 ?
                    <button onClick={this.handleClick}>확인</button>
                    :
                    <button disabled >확인</button>
                }

                <button disabled={pw.length < 7 && true }
                >확인</button>
                
                <p>{pw.length} </p>
            </div>
        );
    }
}

export default Test1;