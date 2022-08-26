import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import PointButton from '../../../components/PointButton';
import Progress from '../../../components/ProgressBar';
import SurveySubTitle from '../../../components/SurveySubTitle';
import SurveyTitle from '../../../components/SurveyTitle';
import modalAtom from '../../../recoil/modalAtom';
import userAtom from '../../../recoil/userAtom';
import {
  PointButtonContainer,
  SurveyPointImg,
  SurveyPointImgContainer,
  SurveyPointOpinionContainer,
  SurveyPointOpinionNo,
  SurveyPointOpinionYes,
} from '../survey-market/SurveyMarket';

const SurveyJob = () => {
  const path = '/survey/market';
  const userData = useRecoilValue(userAtom);
  const setModal = useSetRecoilState(modalAtom);

  useEffect(() => {
    setModal('Middle');
  }, []);
  return (
    <>
      <Progress percent={42} />
      <SurveyTitle content='"아래의 문장에 얼마나 공감하시나요?"' />
      <SurveySubTitle content="나는 현재 다양한 직업에 대해 알고 있다고 느껴요" />
      <SurveyPointOpinionContainer>
        <SurveyPointOpinionNo>전혀 그렇지 않다.</SurveyPointOpinionNo>
        <SurveyPointOpinionYes>매우 그렇다.</SurveyPointOpinionYes>
      </SurveyPointOpinionContainer>
      <SurveyPointImgContainer>
        <SurveyPointImg
          src={require('../../../assets/images/rectangle.png')}
          alt="로고"
        />
      </SurveyPointImgContainer>
      <PointButtonContainer>
        <PointButton
          isSelected={userData.surveyOne === 1}
          name="surveyOne"
          point="1"
          path={path}
        />
        <PointButton
          isSelected={userData.surveyOne === 2}
          name="surveyOne"
          point="2"
          path={path}
        />
        <PointButton
          isSelected={userData.surveyOne === 3}
          name="surveyOne"
          point="3"
          path={path}
        />
        <PointButton
          isSelected={userData.surveyOne === 4}
          name="surveyOne"
          point="4"
          path={path}
        />
        <PointButton
          isSelected={userData.surveyOne === 5}
          name="surveyOne"
          point="5"
          path={path}
        />
      </PointButtonContainer>
    </>
  );
};

export default SurveyJob;
