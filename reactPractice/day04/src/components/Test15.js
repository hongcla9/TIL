import React, { useRef } from 'react';

const Test15 = () => {
    const colorRef = useRef(null)
    const onSelect = ()  => {
        const data = {
            color: colorRef.current.value
        }
        const json = JSON.stringify(data, null , 5 )
        console.log( json )
    }
    
    return (
        <div>
            <h4>컬러 선택</h4>
            <select ref ={ colorRef }>
                <option value='red'>red</option>
                <option value='green'>green</option>
                <option value='blue'>blue</option>
                <option value='pink'>pink</option>
                <option value='skyblue'>skyblule</option>
            </select>
            <button onClick={onSelect}>선택</button>
        </div>
    );
};

export default Test15;