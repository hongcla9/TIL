import React, { useState } from 'react';

const Test16 = () => {
    const [check , setCheck] = useState(false)
    const onChange = (e)  => {
        setCheck( e.target.checked )
    }
    const onClick = ()  => {
        console.log(`checked ${check}`)
    }
    
    return (
        <div>
            <input type="checkbox" onChange={onChange} checked={check} />
            체크박스 선택
            <button onClick={onClick}>확인</button>
            {
                check && 
                <div style={{width:50,height:50,background:'red'}}>
                </div>
            }
        </div>
    );
};

export default Test16;