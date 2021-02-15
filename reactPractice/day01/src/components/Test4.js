import React, { Component } from 'react';
import './Test4.css'

class Test4 extends Component {
    render() {
        return (
            <div>
                <h1> 클래스 : className </h1>
                <div className="box1"> test</div>
                <div className="box2">test</div>
                <div className="box3">test</div>
                <div className="box4">test</div>
            </div>
        );
    }
}

export default Test4;