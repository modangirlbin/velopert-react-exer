# 벨로퍼트와 함께 하는 모던 리액트
https://react.vlpt.us/

## 1장 - 리액트 입문

1. 리액트는 어쩌다 만들어졌을까?
2. 작업환경 준비
3. 나의 첫번째 리액트 컴포넌트
4. JSX의 기본 규칙 알아보기
    - fragment태그 <></>
    - JSX 내부에 자바스크립트 변수를 보여줘야 할 때에는 {} 사용
    - CSS : 'class'대신 'className', -로 연결된 속성이름은 camelCase
5. props 를 통해 컴포넌트에게 값 전달하기
    - 구조분해 할당 복습하자
    - defaultProps: props값이 지정되지 않았을때 기본값 설정
    - 하나의 컴포넌트 태그사이의 컴포넌트가 보여지기위해서는 props.children 을 렌더링해주어야
6. 조건부 렌더링 : AND연산자, 삼항연산자 이용
7. useState 를 통해 컴포넌트에서 바뀌는 값 관리하기
    ```javascript
      // number 초기값(현재상태)은 0, 바꿔주는(업데이트) 함수는 setNumber
      const [number, setNumber] = useState(0);
      // 1. 바꿀 다음상태(값) 바로넣기
      const onIncrease = () => {
        setNumber(number + 1);
      }
      // 2. 다음상태 업데이트 함수 넣기
      const onDecrease = () => {
        setNumber(prvNumber => prvNumber - 1);
      }
    ```