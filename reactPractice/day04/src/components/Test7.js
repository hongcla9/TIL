import React from 'react';

const Test7Sub = ({name, age}) => {
    return (
        <div>
            <span>이름:{name} ({typeof name}) </span>
            <span>나이:{age} ({typeof age}) </span>
        </div>
    );
};

const Test7Sub1 = (props) => {
    return (
        <div>
            <span>이름:{props.name} ({typeof props.name}) </span>
            <span>나이:{props.age} ({typeof props.age}) </span>
        </div>
    );
};

const Test7 = () => {
    const data = {name:'홍길동', age:20 }
    return (
        <div>
            <Test7Sub name="김철수" age ={30} />
            <Test7Sub name="강호동" age = {"25"} />
            <Test7Sub name={data.name} age={data.age} />
            <Test7Sub {...data } />
        </div>
    );
};

export default Test7;