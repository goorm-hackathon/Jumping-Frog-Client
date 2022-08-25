import React, { useState } from 'react';
import styled from 'styled-components';

const SurveyCheckButton = ({
  content,
  key,
}: {
  content: string;
  key: number;
}) => {
  const [isChecked, setIsChecked] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);

  const handleOnChange = (position: number) => {
    console.log(key, position);

    const updatedCheckedState = isChecked.map((item, key) => {
      return key === position ? !item : item;
    });

    setIsChecked(updatedCheckedState);
    console.log(isChecked);
  };

  return (
    <SurveyInterestButtonContainer>
      <SurveyInterestButton
        type="checkbox"
        name="content"
        checked={isChecked[key]}
        onChange={() => handleOnChange(key)}
      />
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
