import React from 'react';
import Card from '../../../components/Card';
import Progress from '../../../components/ProgressBar';
import SurveyTitle from '../../../components/SurveyTitle';

const SurveyUserGender = () => {
  const path = '/survey/interest';
  return (
    <>
      <Progress percent={20} />
      <SurveyTitle content="성별을 입력해주세요" />
      <Card flag="gender" content="남자" path={path} />
      <Card flag="gender" content="여자" path={path} />
    </>
  );
};

export default SurveyUserGender;
