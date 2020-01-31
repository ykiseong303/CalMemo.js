import React, { Component } from 'react';
import MemoInput from "./components/MemoInput";
import Content from "./components/Content";
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      desc : "",
      contents:{month : '', day:'',desc:''},
    }
  }

  render() {
    console.log('====>App')
    return(
      <div className="App">
        <h1>Melendar_test</h1>
        <MemoInput onSubmit={function(_content){
            this.setState(
              {
                contents : _content,
              }
            );
          }.bind(this)}>
        </MemoInput>
        <Content data={this.state.contents}></Content>
      </div>
    );
  }
}

export default App;