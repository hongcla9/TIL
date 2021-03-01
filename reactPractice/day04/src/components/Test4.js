import React, { Component } from 'react';
import $ from 'jquery'

class Test4 extends Component {
    state = {
        data : [
            {no:1 , name:'강호동'},
            {no:2 , name:'aaa'},
            {no:3 , name:'abc'},
            {no:4 , name:'adckk'},
            {no:5 , name:'Dog'},
            {no:6 , name:'Cat'},
            {no:7 , name:'이효리'},
            {no:8 , name:'아이유'},
            {no:9 , name:'김수근'},
            {no:10 , name:'유재석'},
        ]
    }

    componentDidMount() {
        let msg = ''
        let $li = $('ul li')
        $('#text').keyup(function(){
            $li.hide()
            msg = $(this).val() 
            let con = $li.find('span:contains('+msg+')')
            $(con).parent().show()
        })
    }
    
    render() {
        const { data } = this.state 
        return (
            <div>
                {/* jquery 사용방법은 비추천 */}
                <input type="text" id="text"  />
                <ul>
                {
                    data.map( item => <li key={item.no}>
                        {item.no} / <span>{ item.name }</span>
                    </li>)
                }
                </ul>
            </div>
        );
    }
}

export default Test4;