import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Progress from '../../../components/ProgressBar';
import SurveyCheckButton from '../../../components/SurveyCheckButton';
import SurveyTitle from '../../../components/SurveyTitle';
import { surveyCheckContents } from './Data';

const SurveyInteresting = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/survey/job');
  };
  return (
    <>
      <Progress percent={40} />
      <SurveyTitle content="당신의 관심사를 체크해주세요." />
      {surveyCheckContents.map((item: string, index: number) => {
        return <SurveyCheckButton key={index} content={item} />;
      })}
      <SurveyNextContainer>
        <SurveyNextButton onClick={handleClick}>다음</SurveyNextButton>
      </SurveyNextContainer>
    </>
  );
};

export default SurveyInteresting;

const SurveyNextContainer = styled.div``;
const SurveyNextButton = styled.button`
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
