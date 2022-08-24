import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';

const SurveyUserAge = () => {
  const path = '/survey/interest';
  return (
    <UserAgeContainer>
      <UserAgeTitle>나이를 입력해주세요</UserAgeTitle>
      <Card title="중학생" path={path} />
      <Card title="고등학생" path={path} />
      <Card title="대학 재학중" path={path} />
      <Card title="취업 준비생" path={path} />
      <Card title="해당 사항 없음" path={path} />
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
  margin-bottom: 40px;
`;
