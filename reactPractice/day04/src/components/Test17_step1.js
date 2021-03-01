import React, { useRef, useState } from 'react';

const Test17 = () => {
    const nameRef = useRef()

    const [name , setName] = useState('')
    const [pw , setPw] = useState('')
    const [email , setEmail] = useState('')

    const onChange1 = (e)  => {
        const {value} = e.target 
        setName( value )
    }
    const onChange2 = (e)  => {
        const {value} = e.target 
        setPw( value )
    }
    const onChange3 = (e)  => {
        const {value} = e.target
        setEmail( value )
    }
    const onReset = ()  => {
        setName('')
        setPw('')
        setEmail('')
        nameRef.current.focus()
    }

    return (
        <div>
            <h4>input 여러개 관리</h4>
            <input type="text" ref={nameRef} onChange={onChange1} value={name} />
            <input type="text" onChange={onChange2} value={pw} />
            <input type="text" onChange={onChange3} value={email} />
            <button onClick={onReset}>초기화</button>
            <h5> {name} /{pw} /{email} </h5>
        </div>
    );
};

export default Test17;