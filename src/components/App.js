import React, { Component } from 'react';
import marked from 'marked';
import defaultText from '../static/content';

class App extends Component {

  state = {
    input: defaultText,
  }

  onEntry = () => {
    this.setState({
      input: this.refs.newText.value,
    });
  }

  render () {
    return (
      <div className="main-boxes">
        <div id="markdown">
          <textarea id="text-input" data-testid="text-input" ref="newText" defaultValue={this.state.input} onKeyUp={this.onEntry}/>
        </div>
        <div id="preview" data-testid="preview" dangerouslySetInnerHTML={{__html: marked(this.state.input)}}></div>
      </div>
    );
  }

}

export default App;
