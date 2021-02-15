import React, { Component } from 'react';

class Test8 extends Component {
    render() {
        const data = [
            {no:1 , name:'홍길동', age:20 , addr:'서울', done:false} ,
            {no:2 , name:'강호동', age:30 , addr:'제주', done:false} ,
            {no:3 , name:'이효리', age:40 , addr:'강원', done:true} ,
            {no:4 , name:'엄정화', age:10 , addr:'전주', done:true} ,
            {no:5 , name:'제시', age:35 , addr:'경남', done:false} ,
        ]
        return (
            <div>
                <p>
                    {data[0].no} / {data[0].name} / {data[0].age}/{data[0].addr}/
                    {data[0].done === true ? '참':'거짓'}
                </p>
                <hr/>
                {
                   data.map( item => {
                       return ( <p key={item.no}>
                           {item.no}/{item.name}/{item.age}/{item.addr}/                    {item.done === true ? '참':'거짓'} </p>)
                   }) 
                }
                <hr/>
                {
                    data.map( item => <p key={item.no}>
                        {item.no}/{item.name}/{item.age}/{item.addr}/
                        {item.done && '참'}
                    </p>)
                }
            </div>
        );
    }
}

export default Test8;