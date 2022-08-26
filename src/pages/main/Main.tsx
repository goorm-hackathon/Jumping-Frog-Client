import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/survey/age');
  };
  return (
    <MainWrapper>
      <MainImgContainer>
        <img src={require('../../assets/images/logo.png')} alt="샘플" />
      </MainImgContainer>
      <MainLogoContainer>
        <img src="logo.png" alt="로고" />
      </MainLogoContainer>
      <MainTitle>
        10대 제주도민을 위한 맞춤형 <br />
        커리어 성장 뉴스레터 서비스
      </MainTitle>
      <MainNextContainer>
        <MainNextButton onClick={handleClick} type="button">
          구독하기
        </MainNextButton>
      </MainNextContainer>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div`
  margin-top: 20px;
`;
const MainLogoContainer = styled.div`
  margin-top: 66px;
  margin-bottom: 16px;
  text-align: center;
`;
const MainImgContainer = styled.div``;
const MainNextButton = styled.button`
  width: 100%;
  font-size: 18px;
  margin-bottom: 20px;
  line-height: 26px;
  font-weight: 500;
  border: none;
  border-radius: 4px;
  background-color: rgb(251, 81, 59);
  color: rgb(255, 255, 255);
  min-height: 60px;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`;
const MainNextContainer = styled.div`
  display: flex;
  margin-bottom: 68px;
`;
const MainTitle = styled.h1`
  line-height: 26px;
  font-size: 16px;
  color: #f69183;
  font-family: Abhaya Libre SemiBold;
  text-align: center;
  margin-bottom: 20px;
`;
