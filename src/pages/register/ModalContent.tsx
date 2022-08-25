import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import userAtom from '../../recoil/userAtom';

const H3 = styled.h3`
  font-size: 24px;
  margin-bottom: 30px;
  opacity: 0.8;
`;

const P = styled.p`
  opacity: 0.5;
`;

const End = () => {
  const userData = useRecoilValue(userAtom);

  return (
    <>
      <H3>고마워요 {userData.name}님!</H3>
      <P>정보 수집이 완료되었습니다:)</P>
      <P>앞으로 매주 월요일 8시마다</P>
      <P>다양한 직업 뉴스레터로 찾아갈게요💪</P>
    </>
  );
};

export default End;
