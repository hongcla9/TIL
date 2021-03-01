import React, { Component } from 'react';

class Test2SubSub extends Component {
    render() {
        const { onModify1,onModify2,onModify3,onModify4  } = this.props 
        return (
            <div>
                <h3> 데이터 갱신 </h3>
                <p>
                    <button onClick = { onModify1 }>수정1</button>
                    <button onClick = { onModify2 }>수정2</button>
                    <button onClick = { onModify3}>수정3</button>
                    <button onClick = { () => onModify4(4) }>수정4</button>                    
                </p>
            </div>
        );
    }
}

export default Test2SubSub;