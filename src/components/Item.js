import React from 'react';
import './Item.css';

class Item extends React.Component{

  render(){
    return (

          <div className="list-section">

            <div className="box">
              <div className="title">HTML 배우기</div>
              <span className="btn edit">수정</span>
              <span className="btn">삭제</span>
            </div>

          </div>

    )
  }
}

export default Item;
