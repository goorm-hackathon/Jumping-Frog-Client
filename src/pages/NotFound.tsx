import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Container>
    <NotFountImage
      src={require('../assets/images/NotFound.png')}
      style={{
        width: '700px',
        height: '500px',
      }}
      alt="Not Found"
    ></NotFountImage>
    <HomeButton>
      <Link to="/">홈으로 이동</Link>
    </HomeButton>
  </Container>
);

export default NotFound;

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const NotFountImage = styled.img`
  margin-bottom: 10px;
`;

const HomeButton = styled.span`
  font-size: 22px;
  text-align: center;
  position: relative;
  color: white;
  left: 40%;
  border-radius: 10px;
  padding: 10px;
  background-color: ${({ theme }) => theme.mainColor};
`;
