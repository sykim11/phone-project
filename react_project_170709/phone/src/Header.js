import React from 'react';
import './Header.css';
/*
  함수형 컴포넌트
  var a = function(){

  : state를 사용할 수 없는 구조
  데이터를 오로지 prps로만 전달 가능
}
*/
const Header = () => {
  return (
    <div className="header">
      <h1>React Phone Book</h1>
    </div>
  )
}

export default Header;
