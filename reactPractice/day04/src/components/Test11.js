import React, { useState } from 'react';

const Test11 = () => {
    const [visible , setVisible] = useState(false)
    const onVisible = () => {
        setVisible( !visible )
    }   
    
    return (
        <div>
           <button onClick={onVisible}> { visible ? '숨기기':'보이기'} </button>          
           {
               visible && 
               <div style={{width:150, height:150, background:'pink', marginTop:20 }}></div>
           }

        </div>
    );
};

export default Test11;



/*

import React, { useState } from 'react';

const Test11 = () => {
    const [visible , setVisible] = useState(false)

    const onVisible1 = () => {
        setVisible( true )
    }
    const onVisible2 = () => {
        setVisible( false )
    }

    return (
        <div>
           <button onClick={onVisible1}>보이기</button> 
           <button onClick={onVisible2}>숨기기</button>

           {
               visible && 
               <div style={{width:150, height:150, background:'pink', marginTop:20 }}></div>
           }

        </div>
    );
};

export default Test11;

*/