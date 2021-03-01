import React, { useState } from 'react';
import Test19Animail from './Test19Animail';
import Test19Display from './Test19Display';
import Test19Name from './Test19Name';

const Test19 = () => {
    const [name , setName ] = useState('')
    const [ani, setAni] = useState('')

    const onName = (e)  => {
        const { value } = e.target 
        setName( value )
    }
    const onAni = (e)  => {
        const { value } = e.target
        setAni( value )
    }

    return (
        <div>
            <Test19Name name={name} onName = { onName } />
            <hr/>
            <Test19Animail ani={ani} onAni = { onAni } />
            <hr />
            <Test19Display name={name} ani={ani} />
        </div>
    );
};

export default Test19;