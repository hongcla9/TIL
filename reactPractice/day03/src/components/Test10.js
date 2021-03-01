import React, { Component } from 'react';

class Test10 extends Component {
    idInput = React.createRef() 
    no = 1 

    state = {
        userid :'',
        userpw :'',
        data:[] 
    }
    onChange = (e) => {
        const { name , value} = e.target 
        this.setState({
            [name] : value
        })
    }

    onAdd  = (e)  => {
        e.preventDefault() 
        
        const { data, userid, userpw } = this.state 
        this.setState({           
            data : data.concat({ no : this.no++ , userid,  userpw  }),
            userid:'',
            userpw:''            
        })
        this.idInput.current.focus()
    }

    onRemove = (id)  => {
        const { data } = this.state 
        this.setState({
            data : data.filter( item => item.no !== id )
        })
    }


    render() {
        const { userid, userpw , data } = this.state 
        return (
            <div>
                <form onSubmit={this.onAdd}> 
                    <input type="text" value={userid} onChange={this.onChange} name="userid" ref={this.idInput} />
                    <input type="text" value={userpw} onChange={this.onChange} name="userpw" />
                    <button type="submit">추가</button>
                </form>

                <ul>
                    {
                        data.map( item => <li key={item.no}>
                            {item.no}/{item.userid}/{item.userpw} 
                            <button onClick={ () => this.onRemove(item.no) }>삭제</button>
                        </li>)
                    }
                </ul>
            </div>
        );
    }
}

export default Test10;