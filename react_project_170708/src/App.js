import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Floating from './Floating.js';
import Insert from './Insert.js';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [
        {name : '아무개1', phone : '010-1111-1111', job : 'frontend' },
        {name : '김무개2', phone : '010-2222-1111', job : 'designer' },
        {name : '정무개3', phone : '010-3333-1111', job : 'project manager' },
      ]
    }
  }
  popupOpen(){
    document.querySelector('.popup').classList.add('center');
    document.querySelector('.insert').classList.add('show');
  }
  popupCancel(){
    document.querySelector('.popup').classList.remove('center');
    document.querySelector('.insert').classList.remove('show');
  }
  boxDelete(i){
    let newItems = this.state.data.slice();
    newItems.splice(i,1);
    this.setState({
      data : newItems
    })
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content
          boxData={this.state.data}
          boxDel={this.boxDelete.bind(this)} />
        <Floating popupFunction={this.popupOpen} />
        <Insert InsertFunction={this.popupCancel} />
      </div>
    );
  }
  
}

export default App;


// google - React Developer Tools
