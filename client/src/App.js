import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { render } from '@testing-library/react';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={apiResponse:""};
  }


callAPI(){
  fetch("http://127.0.0.1:9000/testAPI")
  .then(res => res.text())
  .then(res => this.setState({apiResponse: res}));

  
}

componentWillMount(){
  this.callAPI();
}


render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       
      </header>
    <p>Hello Nabeel</p>
    <p>{this.state.apiResponse}</p>
    <p>pull request working</p>
    </div>
  );
}
}

export default App;
