import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useRecoilState, useResetRecoilState } from 'recoil';
import userAtom from '../recoil/userAtom';

const Card = ({
  flag,
  content,
  path,
}: {
  flag: string;
  content: string;
  path: string;
}) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(userAtom);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value } = e.currentTarget;
    setUserData({
      ...userData,
      flag: value,
    });
    navigate(path);
  };
  console.log(userData);

  return (
    <CardContainer>
      <CardBtn onClick={handleClick} value={content}>
        {content}
      </CardBtn>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  text-align: center;
`;

const CardBtn = styled.button`
  width: 343px;
  height: 60px;
  text-align: center;
  margin-top: 20px;
  font-size: 15px;
  background-color: rgb(246, 244, 238);
  border: 2px solid rgb(246, 244, 238);
  opacity: 40%;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;
