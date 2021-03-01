import React from 'react';

const Test6 = () => {
    const listItem = (len) => {
        let arr =[] 
        for( let i = 0 ; i < len ; i++ ){
            arr.push( <li>MenuItem { i } </li>)
        }
        return arr        
    }
    return (
        <div>
            <h3>함수형 연습</h3>    
            <ul>
                {
                    listItem(10)
                }
            </ul>
        </div>
    );
};

export default Test6;