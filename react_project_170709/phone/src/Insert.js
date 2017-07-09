import React, {Component} from 'react';
import './Insert.css';

class Insert extends Component{
  constructor(props){
    super(props);
    this.state = {
      name : '',
      phone : '',
      job : ''
    }
  }
  handleChange(e){
    // var name_value = e.target.name;
    // var phone_value = e.target.phone;
    // var job_value = e.target.job;
    var temp = {};
    temp[e.target.name] = e.target.value;
    this.setState(temp)
  }
  render(){
    return(
      <div className="popup">
        <div className="insert">
          <h2>전화번호부 등록</h2>
          <div className="group">
            <input type="text" name="name" required id="user_name" onChange={this.handleChange.bind(this)} />
            <label>name</label>
          </div>
          <div className="group">
            <input type="text" name="phone" required id="user_phone" onChange={this.handleChange.bind(this)} />
            <label>number</label>
          </div>
          <div className="group">
            <input type="text" name="jab" required onChange={this.handleChange.bind(this)} />
            <label>jab</label>
          </div>
          <div className="btn_area">
            <button className="btn submit" onClick={this.props.boxAdd.bind(this,this.state)} >등록</button>
            <button className="btn cancel" onClick={this.props.InsertFunction} >취소</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Insert;
