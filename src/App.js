import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      giphyStrikes: [
        "https://media.giphy.com/media/l2SpNKxkh7g4GH2rC/200w_d.gif",
        "https://media.giphy.com/media/26ufhtGZzTYftlYOI/200w_d.gif",
        "https://media.giphy.com/media/d31vGUegd4SUm51u/200w_d.gif",
        "https://media.giphy.com/media/26uf3hWcvtNWwaKxq/200w_d.gif"
      ]
    }
  }
  displayBatterOptions(){
    const { state, throwStrike, throwBall, swingAndHit, swingAndMiss, noSwing, batterUp } = this.props
    if (state.count.strikes === 3){
      return(
        <a className="waves-effect waves-light btn" onClick={this.props.batterUp}>Batter Up!</a>
      )
    } else{
      return(
        <span>
          <a className="waves-effect waves-light btn" onClick={swingAndHit}>Swing and Hit</a>
          <a className="waves-effect waves-light btn" onClick={swingAndMiss}>Swing and Miss</a>
          <a className="waves-effect waves-light btn" onClick={noSwing}>No Swing</a>
        </span>
      )
    }
  }
  render() {
    const { state, throwStrike, throwBall, swingAndHit, swingAndMiss, noSwing, batterUp } = this.props
    return (
      <div className="App">
        <div className="App-header">
          <h2>TIY<img src={logo} className="App-logo" alt="logo" />SPORTS</h2>
        </div>
        <h3>Results</h3>
        pitcher attempt: {state.pitcherAttempt}
        <br />strikes: {state.count.strikes}
        <br />balls: {state.count.balls}
        <br />outs: {state.outs}
        <h3>Pitcher Options:</h3>
        <a className="waves-effect waves-light btn" onClick={throwStrike}>Throw Strike</a>
        <a className="waves-effect waves-light btn" onClick={throwBall}>Throw Ball</a>
        <h3>Batter Options:</h3>
        {this.displayBatterOptions()}
        <div className="row">
          <div className="col s12 m4"></div>
          <div className="col s12 m4"><img className="responsive-img" src={this.state.giphyStrikes[state.count.strikes]} alt="strike results"/></div>
          <div className="col s12 m4"></div>
        </div>

      </div>
    );
  }
}

export default App;
