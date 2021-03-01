import React, { useState } from 'react';

const Test10 = () => {
    const [color, setColor] = useState('red')

    const onColor = ()  => {
        setColor( color === 'red' ? 'pink':'red' )
    }

    return (
        <div>
            <p>h2 클릭시 배경색변경 pink - red </p>
            <h2 style={{width:250, padding:40, background: color}}
                onClick={onColor} >
                배경색 바꾸기
            </h2>
        </div>
    );
};

export default Test10;