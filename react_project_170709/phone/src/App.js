import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Floating from './Floating.js';
import Insert from './Insert.js';

import axios from 'axios';


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : []
    }
  }

  componentDidMount(){
    const aa = this
    axios.get('http://localhost:4000/phone')
      .then(function(response){
        console.log(response.data);
        const newItems = aa.state.data.concat(response.data.data);
        aa.setState({ data : newItems });
      })
      .catch(function(err){
        console.log(err);
      });
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
  boxAdd(data){
    document.querySelector('.popup').classList.remove('center');
    document.querySelector('.insert').classList.remove('show');
    // 데이터추가 name phone job : concat
    const newItems = this.state.data.concat([data]);
    this.setState({
      data:newItems
    });
  }
  editFunction(i){
    alert(i)
    var mine = i;
    // document.querySelector('.box').eq(mine).children('.edit');

  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content
          boxData={this.state.data}
          boxDel={this.boxDelete.bind(this)}
          boxEdit = {this.editFunction.bind(this)}
          />
        <Floating popupFunction={this.popupOpen} />
        <Insert
          InsertFunction={this.popupCancel}
          boxAdd={this.boxAdd.bind(this)}
          />
      </div>
    );
  }

}

export default App;


// google - React Developer Tools

// react 로 transition 하기 npm install --save react-transition-group@1.x

// react 무료강의 : https://www.inflearn.com/course/react-%EA%B0%95%EC%A2%8C-velopert/?error=login
