import React, { Component } from 'react';

class MemoInput extends Component {

    render() {
        console.log("====>MemoInput")
        return(
            <article>
                <form action="/create_process" method="post"
                    onSubmit={function(e){
                        e.preventDefault();
                        this.props.onSubmit(
                            e.target.elements.desc.value
                        )
                    }.bind(this)}>
                    <p>
                        <textarea cols='100' rows='25' name="desc" placeholder="description"></textarea>
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