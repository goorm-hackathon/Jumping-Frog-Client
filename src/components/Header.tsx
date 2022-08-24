import React from 'react';
import styled from 'styled-components';
import { MdKeyboardBackspace } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleBackspace = (e: React.MouseEvent<SVGElement, MouseEvent>) => {
    navigate(-1);
  };

  return (
    <Container>
      <MdKeyboardBackspace
        onClick={handleBackspace}
        size={30}
        style={{ marginRight: '26%' }}
      />
      <Title>Jumping Frog</Title>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  background-color: inherit;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
`;

const Title = styled.span`
  font-size: 24px;
  font-family: 'Ab';
`;
