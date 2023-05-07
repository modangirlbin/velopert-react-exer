import React from 'react';

// function Hello(props) {
//   return <div
//     style={{      //괄호 한개는 js객체, 한개는 스타일
//       color: props.color
//     }}
//   >안녕하세요{props.name}</div>;
// }


// 구조분해 할당 적용
function Hello({color, name}) {
  return <div
    style={{ 
      // color: color
      color
    }}
  >안녕하세요{name}</div>;
}

// props값이 지정되지 않았을때 기본값 설정
Hello.defaultProps = {
  name: '이름없음'
}

export default Hello;