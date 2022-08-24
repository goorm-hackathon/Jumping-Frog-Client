import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Card = ({ title, path }: { title: string; path: string }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path);
  };

  return (
    <CardContainer>
      <CardBtn onClick={handleClick}>{title}</CardBtn>
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
