import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import userAtom from '../recoil/userAtom';

const H3 = styled.h3`
  margin: 30px 0;
`;

const P = styled.p`
  opacity: 0.5;
`;

const ModalMidContent = () => {
  const userData = useRecoilValue(userAtom);

  return (
    <>
      <H3>반가워요. 개굴!</H3>
      <P>
        요즘 제주도의 {userData.age !== '해당 사항 없음' ? userData.age : ''}{' '}
        {userData.gender}들이 가질만한
      </P>
      <P>진로 고민으로 찾아왔어요! 💪</P>
    </>
  );
};

export default ModalMidContent;
