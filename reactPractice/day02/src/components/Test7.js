import React, { Component } from 'react';

class Test7 extends Component {
    render() {
        const title = '환불원정대'
        const arr = ['유재석','엄정화','이효리','화사','제시']
        return (
            <div>
                <h2>{title}</h2>
                <p> {arr[0]} </p>
                <p> {arr[1]} </p>
                <p> {arr[2]} </p>
                <p> {arr[3]} </p>
                <p> {arr[4]} </p>
                <hr/>
                {
                    arr.map( (item,index) => {
                        return( <p key={index}> {index} / {item} </p>)
                    })
                }
                <hr/>
                {
                    arr.map( (item,index) => <p key={index}>{index}/{item} </p>)
                }
            </div>
        );
    }
}

export default Test7;