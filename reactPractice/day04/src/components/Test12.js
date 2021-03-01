import React, { useState } from 'react';

const Test12 = () => {
    const [counter , setCounter] = useState(0)
    console.log( 'Test12' )

    const increment1 = () => {
        setCounter( counter + 1 )
    }
    const decrement1 = () => {
        setCounter( counter - 1 )
    }

    const increment2 = () => {
        setCounter( state => state + 1 )
    }
    const decrement2 = () => {
        setCounter( prevCounter => prevCounter - 1)
    }
    
    const increment3 = () => {
        console.log('함수안에 동시실행된다' )
        setCounter( state => state + 2)        
    }
    const decrement3 = () => {
        setCounter( state => state - 2  )       
    }
    
    const decrement4 = () => {
        for( let i = 0 ; i< 5 ; i++ ){
            setCounter ( state => state - 1 )
        }
    }

    return (
        <div>
            <h1>숫자: { counter } </h1>
            <p>
                <button onClick={increment1}>증가</button>
                <button onClick={decrement1}>감소</button>
            </p>
            <p>
                <button onClick={() => setCounter( counter + 1)}>증가</button>
                <button onClick={() => setCounter( counter - 1 )}>감소</button>
            </p>
            <p>
                <button onClick={increment2}>증가</button>
                <button onClick={decrement2}>감소</button>
            </p>
            <p>
                <button onClick={increment3}>2증가</button>
                <button onClick={decrement3}>2감소</button>
            </p>
            <p>                
                <button onClick={decrement4}>5감소</button>
            </p>
        </div>
    );
};

export default Test12;