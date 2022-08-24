import React from 'react';
import styled from 'styled-components';

const SurveyUserAge = () => {
  return (
    <UserAgeContainer>
      <UserAgeTitle>나이를 입력해주세요</UserAgeTitle>
      <UserAgeMiddleContainer>
        <UserAgeMiddleBtn>중학생</UserAgeMiddleBtn>
      </UserAgeMiddleContainer>
      <UserAgeHighContainer>
        <UserAgeHighBtn>고등학생</UserAgeHighBtn>
      </UserAgeHighContainer>
    </UserAgeContainer>
  );
};

export default SurveyUserAge;

const UserAgeContainer = styled.div``;
const UserAgeTitle = styled.h3`
  margin-top: 31.68px;
  font-size: 13px;
  text-align: center;
  opacity: 50%;
`;
const UserAgeMiddleContainer = styled.div`
  text-align: center;
`;
const UserAgeMiddleBtn = styled.button`
  width: 343px;
  height: 60px;
  text-align: center;
  margin-top: 64.05px;
  font-size: 15px;
  background-color: rgb(246, 244, 238);
  border: 2px solid rgb(246, 244, 238);
  opacity: 40%;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background-color: gray;
  }
`;
const UserAgeHighContainer = styled(UserAgeMiddleContainer)``;
const UserAgeHighBtn = styled(UserAgeMiddleBtn)``;
