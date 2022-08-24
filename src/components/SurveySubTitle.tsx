import React from 'react';
import styled from 'styled-components';

const SurveySubTitle = ({ content }: { content: string }) => {
  return <SurveySubContent>{content}</SurveySubContent>;
};

export default SurveySubTitle;

const SurveySubContent = styled.h2`
  opacity: 40%;
  text-align: center;
  margin-top: 77px;
`;
