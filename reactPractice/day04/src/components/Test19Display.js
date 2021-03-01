import React from 'react';

const Test19Display = ({name , ani}) => {
    return (
        <div>
            <h4> {name} 님이 좋아하는 동물은 {ani} 입니다.</h4>
            <h4>
                {
                    `${name} 님이 좋아하는 동물은 ${ani} 입니다.`
                }
            </h4>
        </div>
    );
};

export default Test19Display;