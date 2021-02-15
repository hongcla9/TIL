import React, { Component } from 'react';

class Test5 extends Component {
    //클래스영역 - this 
    // 값변경 state객체 , 함수형 useState 
    state = {
        name : '아무개' ,
        age : 0 ,
        addr : '지역'
    }
  // state.name , state.age 
  handleClick1 = ()  => {
      //키 : 값 , 키 : this.state.xxx 
      this.setState({
        name : '유재석' ,
        age : 30 ,
        addr : '서울'
      })
  }
  handleClick2 = () => {
      this.setState({
          name :'강호동' ,
          age : 20 ,
          addr :'경기'
      })
  }
    render() {
        return (
            <div>
                <h2>
                    이름:{this.state.name} / 나이 :{this.state.age} /
                    지역 : {this.state.addr }
                </h2>
                <p>
                    <button onClick={this.handleClick1}>변경</button>
                    <button onClick={this.handleClick2}>변경2</button>
                </p>
                <p>
                    <button onClick={() => this.setState({
                        name:'이효리' , age : 25 , addr:'전주'
                    })}>변경3</button>
                    <button onClick={()=> this.setState({
                        name:'김철수' , age :40 , addr:'경남'
                    })}>변경4</button>
                </p>
            </div>
        );
    }
}

export default Test5;