import React from 'react';
import styled from 'styled-components';

const SurveySubTitle = ({ content }: { content: string }) => {
  return <SurveySubContent>{content}</SurveySubContent>;
};

export default SurveySubTitle;

const SurveySubContent = styled.h2`
  opacity: 50%;
  text-align: center;
  margin-top: 77px;
  font-size: 14px;
  font-weight: 600;
`;
