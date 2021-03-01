import React from 'react';

const Test19Name = ({name , onName}) => {
    return (
        <div>
            <label htmlFor="name">
                이름 :
            </label>
            <input type="text" value={name} onChange={onName} />
        </div>
    );
};

export default Test19Name;