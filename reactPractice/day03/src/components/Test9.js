import React, { Component } from 'react';

class Test9 extends Component {
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

    onAdd  = ()  => {
        const { data, userid, userpw } = this.state 
        this.setState({
            // data : data.concat({ no : this.no++ , userid: userid, userpw: userpw })
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


    /*
    onAdd  = ()  => {
        const { data } = this.state 
        this.setState({
            data : data.concat({ no : this.no++ , userid: this.state.userid, userpw: this.state.userpw })
        })
    }
   */
    render() {
        const { userid, userpw , data } = this.state 
        return (
            <div>
                <p> 
                    <input type="text" value={userid} onChange={this.onChange} name="userid" ref={this.idInput} />
                    <input type="text" value={userpw} onChange={this.onChange} name="userpw" />
                    <button onClick={this.onAdd}>추가</button>
                </p>

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

export default Test9;