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
        <img src="sample.png" alt="샘플" />
      </MainImgContainer>
      <MainLogoContainer>
        <img src="logo.png" alt="로고" />
      </MainLogoContainer>
      <MainTitle>예시용 워딩 한문장 블라블라</MainTitle>
      <MainSubTitle>
        여기에 워딩이 3~4줄 적으면 괜찮 <br />
        여기에 워딩이 3~4줄 적으면 괜찮 <br />
        여기에 워딩이 3~4줄 적으면 괜찮 <br />
      </MainSubTitle>
      <MainNextContainer>
        <MainNextButton onClick={handleClick} type="button">
          시작하기
        </MainNextButton>
      </MainNextContainer>
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.div``;
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
`;
const MainSubTitle = styled.p`
  text-align: center;
  color: #000000;
  opacity: 40%;
  margin-top: 38px;
  margin-bottom: 40px;
`;
