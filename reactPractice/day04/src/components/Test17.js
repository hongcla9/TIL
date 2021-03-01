import React, { useRef, useState } from 'react';

const Test17 = () => {
    const nameRef = useRef()
    const [form , setForm] = useState({
        name:'' ,
        pw :'' ,
        email :'' 
    })
  
  //비구조할당
  const {name, pw , email } = form 

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
            <input type="text" ref={nameRef} name="name" onChange={onChange} value={name} />
            <input type="text" onChange={onChange} name="pw" value={pw} />
            <input type="text" onChange={onChange} name="email" value={email} />
            <button onClick={onReset}>초기화</button>
            <h5> {name} /{pw} /{email} </h5>
        </div>
    );
};

export default Test17;