import React, { Component } from 'react';

class MemoInput extends Component {
    constructor(props){
        super(props);
        this.DivideText = this.DivideText.bind(this);
    }
    DivideText(e){
        var text = e.target.elements.desc.value;
        var content ={month : "",day:"",desc:"",};
        var text1,text2,text3 = "";
        text1 = text.substr(0,2);
        text2 = text.substr(2,2);
        text3 = text.substr(4,);
        content = {month:text1,day:text2,desc:text3}
        return content;
    }
    render() {
        console.log("====>MemoInput")
        return(
            <article>
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            this.DivideText(e)
                        )
                    }.bind(this)}>
                    <p>
                        <textarea name="desc" placeholder="description"></textarea>
                    </p>
                    <p>
                        <input type="submit"></input>
                    </p>
                 </form>
            </article>
        )
    }
}

export default MemoInput;