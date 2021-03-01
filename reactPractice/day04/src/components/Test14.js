import React, { useRef } from 'react';

const Test14 = () => {
    const nameRef = useRef(null)
    const pwRef = useRef(null)
    
    const onClick = ()  => {
        const data = {
            name : nameRef.current.value , 
            pw : pwRef.current.value 
        }
        const json = JSON.stringify(data, null, 5)
        //JSON.stringify(value, replacer, space)
        console.log( json )
    }
    return (
        <div>
            {/* useRef설명용 예제로 적절하지 않다 그냥 수업용 */}
            <input type="text" ref={nameRef} />
            <input type="text" ref={pwRef} />
            <button onClick={ onClick }>확인</button>
        </div>
    );
};

export default Test14;