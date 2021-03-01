import React, { useState } from 'react';

const Test9 = () => {
    const [name , setName] = useState('아무개')
    const [color , setColor] = useState('red')
    // const [state,setState] = React.useState(초기값)
    // const [state,setState] = useState(초기값)
    // setState(값)

    const onName1 = () => {
        setName('홍길동')
    }

    const onName2 = () => {
        setName('강호동')
    }

    const onName3 = () => {
        setName('이효리')
    }

    const onName4 = () => {
        setName('화사')
    }

    return (
        <div>
            <h1 style={{color: color}}>{name}</h1>
            <p>
                <button onClick={onName1}>이름</button>
                <button onClick={onName2}>이름</button>
                <button onClick={onName3}>이름</button>
                <button onClick={onName4}>이름</button>
            </p>
            <p>
                <button onClick={ () => setColor('pink') }>color</button>
                <button onClick={ () => setColor('blue') }>color</button>
                <button onClick={ () => setColor('skyblue') }>color</button>
                <button onClick={ () => setColor('lime') }>color</button>
            </p>
        </div>
    );
};

export default Test9;