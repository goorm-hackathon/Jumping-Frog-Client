import React from 'react';
import styled from 'styled-components';
import PointButton from '../../../components/PointButton';
import Progress from '../../../components/ProgressBar';
import SurveySubTitle from '../../../components/SurveySubTitle';
import SurveyTitle from '../../../components/SurveyTitle';

const SurveyMarket = () => {
  return (
    <>
      <Progress percent={80} />
      <SurveyTitle content="당신의 성향을 체크해주세요." />
      <SurveySubTitle content="나는 현재 제주도에 취업시장이 다양한 직업군에 접근할 수 있도록 활성화 되어 있다고 생각해요" />
      <PointButtonContainer>
        <PointButton point="1" />
        <PointButton point="2" />
        <PointButton point="3" />
        <PointButton point="4" />
        <PointButton point="5" />
      </PointButtonContainer>
    </>
  );
};

export default SurveyMarket;

const PointButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
