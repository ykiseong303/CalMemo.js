import React, { Component } from 'react';

class TOC extends Component {
    render() {
        console.log('===> TOC')
        var data = this.props.data;
        var i = 1;
        var list = [];
        while(i < data.length) {
            list.push(
            <li key={data[i].id}>
                <ol>{data[i].month}월 {data[i].day}일 내용 : {data[i].desc}</ol>
            </li>
            )
            i = i+1;
        }
        return(
            <nav>
                <ul>
                    {list}
                </ul>
            </nav>
        )
    }
}

export default TOC;