import React, {Component} from 'react';
import './Content.css';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Content extends Component{


  render(){

    // const tag = data.map(function(v,i){});
    const tag = this.props.boxData.map((v,i)=>{
      return(
        <div className="box" key={v.phone}>
            <p className="title">
              <input type="text" name="" value={v.name} className="name_input" disabled />
              <span> {v.jab}</span>
            </p>
            <p><i className="fa fa-phone" aria-hidden="true"></i>{v.phone}</p>
            <span className="close" onClick={this.props.boxDel.bind(this,i)}><i className="fa fa-plus" aria-hidden="true"></i></span>
            <span className="check"><i className="fa fa-check" aria-hidden="true"></i></span>
            <span className="edit" onClick={this.props.boxEdit.bind(this,i)}><i className="fa fa-pencil" aria-hidden="true"></i></span>
          </div>
      )
    });

    return(
      <div className="content">
        <CSSTransitionGroup transitionName="example"
          transitionEnterTimeout={400}
          transitionLeaveTimeout={400} >
          {tag}
        </CSSTransitionGroup>
      </div>
    )
  }
}

export default Content;
