import React from 'react';
import Card from '../../../components/Card';
import SurveyTitle from '../../../components/SurveyTitle';

const SurveyUserGender = () => {
  const path = '/survey/interest';
  return (
    <>
      <SurveyTitle content="성별을 입력해주세요" />
      <Card title="남자" path={path} />
      <Card title="여자" path={path} />
    </>
  );
};

export default SurveyUserGender;
