import React, {Component} from 'react';
import './Insert.css';

class Insert extends Component{
  render(){
    return(
      <div className="popup">
        <div className="insert">
          <h2>전화번호부 등록</h2>
          <div className="group">
            <input type="text" name="name" required id="user_name" />
            <label for="name">NAME</label>
          </div>
          <div className="group">
            <input type="text" name="user_phone" required id="user_phone" />
            <label for="user_phone">NUMBER</label>
          </div>
          <div className="group">
            <input type="text" name="jab" required />
            <label for="jab">jab</label>
          </div>
          <div className="btn_area">
            <button className="btn submit">등록</button>
            <button className="btn cancel" onClick={this.props.InsertFunction}>취소</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Insert;
