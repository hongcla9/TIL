import React, { useState } from 'react';
const Name = () => {
    const [name , setName] = useState('')
    return (
        <div>
            <label htmlFor="name">이름:</label>
            <input type="text" 
                value={name}
                onChange={ (e) => setName( e.target.value ) }
            />
            <span> {name} </span>
        </div>
    );
};

const Animail = ({ani , onAni }) => {
    return (
        <div>
            <label htmlFor="ani" >좋아하는 동물 : </label>
            <input type="text" id="ani" 
                value={ani}
                onChange = { onAni }
             />
            <span> {ani} </span>
        </div>
    );
};
const Display = ({ani}) => {
    return (
        <div>
            <h3>
                내가 좋아하는 동물은 {ani} 입니다. 
            </h3>

            {
                `내가 좋아하는 동물은 ${ani} 입니다. `
            }
        </div>
    );
};
const Test18 = () => {
    const [ani , setAni] = useState('동물')

    const onAni = (e)  => {
        const { value } = e.target 
        setAni( value )
    }

    return (
        <div>
            <h4> 컴포넌트분리와 데이터값 처리 </h4>
            <Name />
            <hr/>
            <Animail ani = { ani } onAni = { onAni } />
            <hr/>
            <Display ani = { ani } />
        </div>
    );
};

export default Test18;