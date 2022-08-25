import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import PointButton from '../../../components/PointButton';
import Progress from '../../../components/ProgressBar';
import SurveySubTitle from '../../../components/SurveySubTitle';
import SurveyTitle from '../../../components/SurveyTitle';
import modalAtom from '../../../recoil/modalAtom';
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
  const setModal = useSetRecoilState(modalAtom);

  useEffect(() => {
    setModal('Middle');
  }, []);
  return (
    <>
      <Progress percent={60} />
      <SurveyTitle content="당신의 성향을 체크해주세요." />
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
        <PointButton name="surveyOne" point="1" path={path} />
        <PointButton name="surveyOne" point="2" path={path} />
        <PointButton name="surveyOne" point="3" path={path} />
        <PointButton name="surveyOne" point="4" path={path} />
        <PointButton name="surveyOne" point="5" path={path} />
      </PointButtonContainer>
    </>
  );
};

export default SurveyJob;
