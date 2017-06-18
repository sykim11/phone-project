import React from 'react';
import Item from './Item';
import './List.css';
// react-addons-update :쉽게 데이터를 넣고 지우고 수정하는 역할의 npm
import update from 'react-addons-update';


class List extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      data : []
    }
    this.handleKeyUp = this.handleKeyUp.bind(this);
  }

  handleKeyUp(e){

    if(e.keyCode == 13){

      var inputText = document.querySelector('.contentText').value;
      // addons의 기능
      let newState = update(this.state,{
        data : {
          $push:[{content:inputText}]
        }
      });
      // addons의 기능 end
      this.setState(newState);
      document.querySelector('.contentText').value = '';

    }

  }

  render(){
    return (

        <div className="inner">

            <div className="input-section">
              <input className="contentText" type="text" onKeyUp={this.handleKeyUp} placeholder="To Do?" />
            </div>

            <Item itemList={this.state.data} />

        </div>

    )
  }
}

export default List;
