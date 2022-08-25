import React from 'react';
import { useRecoilValue } from 'recoil';
import Card from '../../../components/Card';
import Progress from '../../../components/ProgressBar';
import SurveyTitle from '../../../components/SurveyTitle';
import userAtom from '../../../recoil/userAtom';

const SurveyUserGender = () => {
  const path = '/survey/interest';
  const userData = useRecoilValue(userAtom);
  const selectedGender = userData.gender;
  return (
    <>
      <Progress percent={20} />
      <SurveyTitle content="성별을 입력해주세요" />
      <Card
        isSelected={selectedGender === '남자'}
        name="gender"
        content="남자"
        path={path}
      />
      <Card
        isSelected={selectedGender === '여자'}
        name="gender"
        content="여자"
        path={path}
      />
    </>
  );
};

export default SurveyUserGender;
