import React, { useState } from 'react';
// 리액트 패키지에서 useState 라는 함수 불러옴

function Counter() {

  // 비구조화 할당
  // const numberState = useState(0);
  // const number = numberState[0];
  // const setNumber = numberState[1];
  // useState가 호출되었을땐 배열을 반환하게 되는데, 첫번째 원소를 number란이름으로 추출 두번째 원소를 numberState란 이름으로 추출한다

  const [number, setNumber] = useState(0);
  // number 초기값(현재상태)은 0, 바꿔주는(업데이트) 함수는 setNumber

  const onIncrease = () => {
    setNumber(number + 1);
  }
  const onDecrease = () => {
    setNumber(number - 1);
  }

  // 업데이트 함수 사용(최적화)
  // const onIncrease = () => {
  //   setNumber(prvNumber => prvNumber + 1);
  // }
  // const onDecrease = () => {
  //   setNumber(prvNumber => prvNumber - 1);
  // }

  // setNumber은 
  // 1. 'number + 1' 요렇게 어떤 값으로 바꿀꺼야 하고 아예 다음상태를 넣어줄수도 있고,
  // 2. 'prvNumber => prvNumber + 1' 이런로직으로 상태를 업데이트 할꺼야 라는 식으로 함수를 넣어줄 수도 있다.

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      {/* 함수를 실행시키는것이 아닌 함수타입의 값을 넣어줘야 한다  */}
    </div>
  );
}

export default Counter;