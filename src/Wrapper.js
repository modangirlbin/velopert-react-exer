import React from "react";

function Wrapper({children}){
  const style = {
    border: '2px solid black',
    padding: 16
  }
  return <div style={style}>{children}</div>  // return의 ()는 생략가능
}

export default Wrapper;