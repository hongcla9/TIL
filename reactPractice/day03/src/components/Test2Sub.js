import React, { Component } from 'react';
import Test2SubSub from './Test2SubSub';

class Test2Sub extends Component {
    render() {
        const { onRemove1 , onRemove2 , onRemove3, onModify1 , onModify2 ,onModify3, onModify4 } = this.props 
        return (
            <div>
                <h3>데이터 삭제</h3>
                <p>
                    <button onClick={ onRemove1 }>삭제1</button>
                    <button onClick={ onRemove2 }>삭제2</button>

                    <button onClick = { () => onRemove3(3) }>삭제3</button>
                    <button onClick={ () => onRemove3(4) }>삭제4</button>
                    <button onClick={ () => onRemove3(5) }>삭제5</button>
                </p>
                <hr/>

                <Test2SubSub 
                    onModify1 = { onModify1 }
                    onModify2 = { onModify2 }
                    onModify3 = { onModify3 }
                    onModify4 = { onModify4 }
                />
            </div>
        );
    }
}

export default Test2Sub;