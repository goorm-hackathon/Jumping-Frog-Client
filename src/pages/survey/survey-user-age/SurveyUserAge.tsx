import React from 'react';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import Card from '../../../components/Card';
import Progress from '../../../components/ProgressBar';
import SurveyTitle from '../../../components/SurveyTitle';
import userAtom from '../../../recoil/userAtom';

const SurveyUserAge = () => {
  const path = '/survey/gender';
  const userData = useRecoilValue(userAtom);
  const selectedAge = userData.age;

  return (
    <UserAgeContainer>
      <Progress percent={0} />
      <SurveyTitle content="나이를 입력해주세요" />
      <Card
        isSelected={selectedAge === '중학생'}
        name="age"
        content="중학생"
        path={path}
      />
      <Card
        isSelected={selectedAge === '고등학생'}
        name="age"
        content="고등학생"
        path={path}
      />
      <Card
        isSelected={selectedAge === '대학생'}
        name="age"
        content="대학생"
        path={path}
      />
      <Card
        isSelected={selectedAge === '취업 준비생'}
        name="age"
        content="취업 준비생"
        path={path}
      />
      <Card
        isSelected={selectedAge === '해당 사항 없음'}
        name="age"
        content="해당 사항 없음"
        path={path}
      />
    </UserAgeContainer>
  );
};

export default SurveyUserAge;

const UserAgeContainer = styled.div``;
