import React from 'react';
import './Item.css';

class Item extends React.Component{

  render(){

    // let data = [
    //   {content: '공부하기'},
    //   {content: '놀기'},
    //   {content: '밥먹기'},
    //   {content: '울기'},
    //   {content: '잠자기'}
    // ]

    // map 함수
    // let a = [1,2,3,4,5]

    return (

          <div className="list-section">

            {
              // a.map(function(num){ return num })
              this.props.itemList.map((item)=>{
                return (
                  <div className="box">
                    <div className="title">{item.content}</div>
                    <span className="btn edit">수정</span><span className="btn">삭제</span>
                  </div>
                )
              })
            }

          </div>

    )
  }
}

export default Item;
