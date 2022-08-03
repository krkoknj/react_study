import React from 'react';
import styled from 'styled-components';

/** styled-components
 *  :CSS 문법을 그대로 사용
 *  결과물을 스타일링된 컴포넌트 형태로 만들어주는 오픈소스 라이브러리
 */

const Wrapper = styled.div`
  padding: 1em;
  background: coral;
  border-radius: 50%;
`;

const MyButton = styled.button`
  padding: 3px;
  background-color: beige;
  color: #0e0d0d;
`;

const SmartButton = styled.button`
  color: ${(props) => (props.dark ? 'white' : 'black')};
  background: ${(props) => (props.dark ? 'dark' : 'white')};
  border: 1px solid crimson;
  padding: 3px;
`;

function MainPage(props) {
  return (
    <Wrapper>
      <div>MainPage</div>
      <SmartButton dark>SmartButton</SmartButton>
    </Wrapper>
  );
}

export default MainPage;
