import React from 'react';
import styled from 'styled-components';

const End = () => {
  return (
    <EndContainer>
      <EndContent>
        제출해주셔서 감사해요 <br />
        제출해주셔서 감사해요 <br />
        제출해주셔서 감사해요 <br />
      </EndContent>
    </EndContainer>
  );
};

export default End;

const EndContainer = styled.div``;
const EndContent = styled.p`
  margin-top: 184px;
  text-align: center;
  line-height: 50px;
`;
