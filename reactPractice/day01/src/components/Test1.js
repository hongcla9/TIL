import React, { Component } from 'react';

class Test1 extends Component {
    render() {
        return (
           <div>
               <h1>JSX문법</h1>
               <p>한줄이상일경우 div 묶어준다</p>
               <p>반드시 닫는 태그가 존재해야한다</p>
               <p>빈태그  / 사용 </p>
               <input type="text" />
               <br />
               <hr />
           </div>         
        );
    }
}

export default Test1;