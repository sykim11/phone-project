import React from 'react';
import Item from './Item';
import './List.css';


class List extends React.Component{

  render(){
    return (

        <div className="inner">

            <div className="input-section">
              <input type="text" name="" placeholder="To Do?" value="" />
            </div>

          <Item />

        </div>

    )
  }
}

export default List;
