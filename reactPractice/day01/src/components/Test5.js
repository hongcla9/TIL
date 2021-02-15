import React, { Component } from 'react';

class Test5 extends Component {
    render() {
        const done1 = true 
        const done2 = false 
        const done3 = undefined

        return (
            <div>
               <p>
                   {done1 === true ? <button>로그인</button>:<button>로그아웃</button>}
               </p>
               <p>
                   {done1 ? <button>로그인</button>:<button>로그아웃</button>}
               </p>
               <p>
                   {done1 && <button>로그인</button>}
               </p>
            </div>
        );
    }
}

export default Test5;