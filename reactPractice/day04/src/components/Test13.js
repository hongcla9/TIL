import React, { useState } from 'react';

const Test13 = () => {
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const handleChange1 = (e)  => {
        setUsername( e.target.value )
    }
    const handleChange2 = (event)  => {
        const { value } = event.target 
        setPassword( value )
    }
    const onReset = ()  => {
        setUsername('')
        setPassword('')
    }

    return (
        <div>
            <input type="text" onChange={handleChange1} value={username} />
            <input type="text" onChange={handleChange2} value={password} />
            <button onClick={onReset}>초기화</button>
            <h4>
                {username} / { password }
            </h4>
        </div>
    );
};

export default Test13;