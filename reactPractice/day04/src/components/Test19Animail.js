import React from 'react';

const Test19Animail = ({ani , onAni}) => {
    return (
        <div>
            <label htmlFor="ani">
                좋아하는 동물 :
            </label>
            <input type="text" value={ani} onChange={onAni} />
        </div>
    );
};

export default Test19Animail;