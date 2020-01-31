import React, { Component } from 'react';

class Content extends Component {
    render() {
        console.log('===> Content')
        var data = this.props.data;
        return(
            <article>
                <ol>
                    <ol>{data.month}월</ol>
                    <ol>{data.day}일</ol>
                    <ol>내용 : {data.desc}</ol>
                </ol>
            </article>
        )
    }
}

export default Content;