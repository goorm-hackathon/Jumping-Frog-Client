import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/main');
    }, 900);
  });
  return (
    <HomeContainer>
      <HomeImg src={require('../../assets/images/home2.gif')} alt="home" />
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  width: 100%;
  /* height: 100%; */
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;
const HomeImg = styled.img`
  width: 100%;
`;
