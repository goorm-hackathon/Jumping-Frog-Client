import React from 'react';
import styled from 'styled-components';
import Card from '../../../components/Card';
import Progress from '../../../components/ProgressBar';
import SurveyTitle from '../../../components/SurveyTitle';

const SurveyUserAge = () => {
  const path = '/survey/gender';

  return (
    <UserAgeContainer>
      <Progress percent={0} />
      <SurveyTitle content="나이를 입력해주세요" />
      <Card flag="age" content="중학생" path={path} />
      <Card flag="age" content="고등학생" path={path} />
      <Card flag="age" content="대학 재학중" path={path} />
      <Card flag="age" content="취업 준비생" path={path} />
      <Card flag="age" content="해당 사항 없음" path={path} />
    </UserAgeContainer>
  );
};

export default SurveyUserAge;

const UserAgeContainer = styled.div``;
