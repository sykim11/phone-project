import React, {Component} from 'react';
import './Floating.css';

class Floating extends Component{

  render(){
    return(
      // <div className="floating" onClick={()=>{
      //   document.querySelector('.popup').classList.add('center');
      // }}>
      <div className="floating" onClick={this.props.popupFunction}>
        <i className="fa fa-plus" aria-hidden="true"></i>
      </div>
    )
  }
}

export default Floating;
