import React from 'react';
import styled from 'styled-components';

const SurveyTitle = ({ content }: { content: string }) => {
  return <SurveyContent>{content}</SurveyContent>;
};

export default SurveyTitle;

const SurveyContent = styled.h3`
  margin-top: 31.68px;
  font-size: 16px;
  text-align: center;
  opacity: 50%;
  margin-bottom: 40px;
`;
