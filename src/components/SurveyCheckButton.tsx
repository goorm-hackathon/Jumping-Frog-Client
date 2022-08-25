import React from 'react';
import styled from 'styled-components';

const SurveyCheckButton = ({ content }: { content: string }) => {
  return (
    <SurveyInterestButtonContainer>
      <SurveyInterestButton type="checkbox" name="content" />
      <SurveyInterestLable htmlFor="content">{content}</SurveyInterestLable>
    </SurveyInterestButtonContainer>
  );
};

export default SurveyCheckButton;

const SurveyInterestButton = styled.input`
  width: 20px;
  height: 35px;
`;

const SurveyInterestButtonContainer = styled.div`
  display: flex;
  background-color: #f6f4ee;
  border: 2px solid rgb(246, 244, 238);
  opacity: 40%;
  font-weight: 600;
  cursor: pointer;
  border-radius: 12px;
  font-size: 14px;
  align-items: center;
  margin-bottom: 16px;
  height: 60px;
`;

const SurveyInterestLable = styled.label`
  flex-grow: 1;
  text-align: center;
`;
