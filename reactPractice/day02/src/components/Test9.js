import React, { Component } from 'react';
import './Test9.css'

class Test9 extends Component {
    state = {
        data: [
            {no:1, name:'유재석',age:30,addr:'서울',done:false},
            {no:2, name:'이효리',age:20,addr:'제주',done:false},
            {no:3, name:'제시',age:10,addr:'경기',done:true},
            {no:4, name:'엄정화',age:40,addr:'부산',done:false},
            {no:5, name:'화사',age:25,addr:'경주',done:true},
            {no:6, name:'이수근',age:45,addr:'강원',done:false},
        ]
    }

    render() {
        const {
            data 
        } = this.state
        return (
            <div className="Test9">
                <table>
                    <colgroup>
                        <col className="no" />
                        <col className="name" />
                        <col className="age" />
                        <col className="addr" />
                        <col className="done" />
                    </colgroup>
                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>이름</th>
                            <th>나이</th>
                            <th>주소</th>
                            <th>참여여부</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                          data.map( item => <tr key={item.no}>
                              <td>{item.no} </td>
                              <td> {item.name }</td>
                              <td> {item.age} </td>
                              <td> {item.addr} </td>
                              <td>
                                  {item.done && '참여'}
                                  {item.done || '미참여'}
                              </td>
                          </tr>)
                      }
                    </tbody>
                </table>                
            </div>
        );
    }
}

export default Test9;