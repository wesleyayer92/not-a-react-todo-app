import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      items: []
    };
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this._handleSubmit}>
          <input 
            onChange={this._updateText} 
            value={this.state.text}
            placeholder="Type something here!"
          />
        </form>
        
        <div>
          {this.state.items.map((item) => {
            <li>
              {item}
            </li>
          })}
        </div>
      </div>
    );
  }

  _handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: this.state.items.push(this.state.text)
    });
  }

  _updateText = (event) => {
    console.log(event.target.value);
    this.setState({
      text: event.target.value
    })
  }
}

export default App;
