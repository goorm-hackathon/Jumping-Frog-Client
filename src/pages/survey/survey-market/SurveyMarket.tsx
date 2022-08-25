import React from 'react';
import styled from 'styled-components';
import PointButton from '../../../components/PointButton';
import Progress from '../../../components/ProgressBar';
import SurveySubTitle from '../../../components/SurveySubTitle';
import SurveyTitle from '../../../components/SurveyTitle';

const SurveyMarket = () => {
  const path = '/register';
  return (
    <>
      <Progress percent={80} />
      <SurveyTitle content="당신의 성향을 체크해주세요." />
      <SurveySubTitle content="나는 현재 제주도에 취업시장이 다양한 직업군에 접근할 수 있도록 활성화 되어 있다고 생각해요" />
      <SurveyPointOpinionContainer>
        <SurveyPointOpinionNo>전혀 그렇지 않다.</SurveyPointOpinionNo>
        <SurveyPointOpinionYes>매우 그렇다.</SurveyPointOpinionYes>
      </SurveyPointOpinionContainer>
      <SurveyPointImgContainer>
        <SurveyPointImg
          src={require('../../../assets/images/rectangle.png')}
          alt="로고"
        />
      </SurveyPointImgContainer>
      <PointButtonContainer>
        <PointButton point="1" path={path} />
        <PointButton point="2" path={path} />
        <PointButton point="3" path={path} />
        <PointButton point="4" path={path} />
        <PointButton point="5" path={path} />
      </PointButtonContainer>
    </>
  );
};

export default SurveyMarket;

export const PointButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;

export const SurveyPointOpinionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
`;
export const SurveyPointOpinionNo = styled.span`
  color: #191717;
  opacity: 60%;
  font-size: 7px;
`;
export const SurveyPointOpinionYes = styled.span`
  color: #191717;
  opacity: 60%;
  font-size: 7px;
`;

export const SurveyPointImgContainer = styled.div``;
export const SurveyPointImg = styled.img`
  width: 100%;
`;
