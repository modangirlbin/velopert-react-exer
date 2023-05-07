import React from 'react';
import Hello from './Hello'; // 현재경로 ./ 표시해주기
import './App.css';

function App() {
  const name = 'react';
  const style = {
    fontSize : 24 // 기본단위는 px
  };

  return (
    <>
      {/* 주석은 이렇게 */}
      <Hello 
        // 주석은 이렇게
      />
      <div style={style}>{name}</div>
      <div className="gray-box"></div>
    </>
  );
}

export default App;
