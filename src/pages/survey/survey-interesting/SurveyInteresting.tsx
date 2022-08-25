import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import Progress from '../../../components/ProgressBar';
import SurveyTitle from '../../../components/SurveyTitle';
import userAtom from '../../../recoil/userAtom';
import { surveyCheckContents } from './Data';

const SurveyInteresting = () => {
  const [userData, setUserData] = useRecoilState(userAtom);
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState<boolean[]>(
    new Array(surveyCheckContents.length).fill(false),
  );

  const handleClick = () => {
    const newArr: number[] = [];
    isChecked.forEach((v, i) => {
      if (v) newArr.push(i + 1);
    });

    setUserData({
      ...userData,
      interests: newArr,
    });

    navigate('/survey/job');
  };

  const handleOnChange = (position: number) => {
    const updatedCheckedState = isChecked.map((item, key) => {
      return key === position ? !item : item;
    });

    setIsChecked(updatedCheckedState);
  };
  return (
    <>
      <Progress percent={28} />
      <SurveyTitle content="당신의 관심사를 체크해주세요." />
      {surveyCheckContents.map((item: string, index: number) => {
        return (
          <SurveyInterestButtonContainer key={index}>
            <SurveyInterestButton
              type="checkbox"
              name="content"
              checked={isChecked[index]}
              onChange={() => handleOnChange(index)}
            />
            <SurveyInterestLable htmlFor="content">{item}</SurveyInterestLable>
          </SurveyInterestButtonContainer>
        );
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

const SurveyInterestButton = styled.input`
  width: 20px;
  height: 35px;
`;

const SurveyInterestButtonContainer = styled.div`
  display: flex;
  background-color: #efe6c9;
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
