import React from 'react';
import styled from 'styled-components';

const PointButton = ({ point }: { point: string }) => {
  return <SurveyPointButton>{point}</SurveyPointButton>;
};

export default PointButton;

const SurveyPointButton = styled.button`
  text-align: center;
  width: 62px;
  height: 55px;
  background-color: #f6f4ee;
  border: 2px solid rgb(246, 244, 238);
  opacity: 40%;
  font-weight: 600;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background-color: gray;
  }
`;
