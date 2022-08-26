import React from 'react';
import { useRecoilState } from 'recoil';
import PointButton from '../../../components/PointButton';
import Progress from '../../../components/ProgressBar';
import SurveySubTitle from '../../../components/SurveySubTitle';
import SurveyTitle from '../../../components/SurveyTitle';
import userAtom from '../../../recoil/userAtom';
import {
  PointButtonContainer,
  SurveyPointImg,
  SurveyPointImgContainer,
  SurveyPointOpinionContainer,
  SurveyPointOpinionNo,
  SurveyPointOpinionYes,
} from '../survey-market/SurveyMarket';

const SurveyQuestion2 = () => {
  const path = '/register';
  const [userData, setUserData] = useRecoilState(userAtom);
  return (
    <>
      <Progress percent={84} />
      <SurveyTitle content=' "아래의 문장에 얼마나 공감하시나요?"' />
      <SurveySubTitle content='"저는 다양한 진로에 대해서 탐색해보고 싶어요"' />
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
          isSelected={userData.surveyFour === 1}
          name="surveyFour"
          point="1"
          path={path}
        />
        <PointButton
          isSelected={userData.surveyFour === 2}
          name="surveyFour"
          point="2"
          path={path}
        />
        <PointButton
          isSelected={userData.surveyFour === 3}
          name="surveyFour"
          point="3"
          path={path}
        />
        <PointButton
          isSelected={userData.surveyFour === 4}
          name="surveyFour"
          point="4"
          path={path}
        />
        <PointButton
          isSelected={userData.surveyFour === 5}
          name="surveyFour"
          point="5"
          path={path}
        />
      </PointButtonContainer>
    </>
  );
};

export default SurveyQuestion2;
