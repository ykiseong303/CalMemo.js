import React, { Component } from 'react';
import MemoInput from "./components/MemoInput";
// import Content from "./components/Content";
import TOC from "./components/TOC";
class App extends Component {
  constructor(props){
    super(props);
    this.max_content_id = 0;
    this.state = {
      contents:[
        {id:'',month:'',day:'',desc:''}
      ],
      content:{month : '', day:'',desc:''},
    }
  }
  DivideText(_text){
    var _month = _text.substr(0,2);
    var _day = _text.substr(2,2);
    var _desc = _text.substr(4,);
    var content ={month : _month,day:_day,desc:_desc,};
    return content;
}
  render() {
    console.log('====>App')
    return(
      <div className="App">
        <h1>CalMemo_test</h1>
        <MemoInput onSubmit={function(_text){
          var content = this.DivideText(_text);
          this.max_content_id = this.max_content_id + 1;
          var _contents = this.state.contents.concat({
            id : this.max_content_id,
            month : content.month,
            day : content.day,
            desc : content.desc,
          });
          this.setState(
            {
              contents : _contents,
            }
          );
        }.bind(this)}>
        </MemoInput>
        <TOC data = {this.state.contents}></TOC>
        {/* <Content data={this.state.content}></Content> */}
      </div>
    );
  }
}

export default App;