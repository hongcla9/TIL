import React, { useRef, useState } from 'react';

const Test17 = () => {
    const nameRef = useRef()
    const [form , setForm] = useState({
        name:'' ,
        pw :'' ,
        email :'' 
    })
  //form = {name:'', pw:'', email:''}

    const onChange = (e)  => {
        const {value, name} = e.target 
        setForm({
            ...form , 
            [name]:value 
        })
    }
     
    const onReset = ()  => {
        setForm({
            name:'' ,
            pw :'' ,
            email :'' 
        }) 
        nameRef.current.focus()
    }

    return (
        <div>
            <h4>input 여러개 관리</h4>
            <input type="text" ref={nameRef} name="name" onChange={onChange} value={form.name} />
            <input type="text" onChange={onChange} name="pw" value={form.pw} />
            <input type="text" onChange={onChange} name="email" value={form.email} />
            <button onClick={onReset}>초기화</button>
            <h5> {form.name} /{form.pw} /{form.email} </h5>
        </div>
    );
};

export default Test17;