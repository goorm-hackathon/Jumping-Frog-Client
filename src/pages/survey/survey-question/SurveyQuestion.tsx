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

const SurveyQuestion = () => {
  const path = '/survey/question2';
  const [userData, setUserdata] = useRecoilState(userAtom);
  return (
    <>
      <Progress percent={70} />
      <SurveyTitle content=' "아래의 문장에 얼마나 공감하시나요?"' />
      <SurveySubTitle
        content={'"저는 학교에서 진로교육을 충분히 해주고 있다고 느껴요"'}
      />
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
          isSelected={userData.surveyThree === 1}
          name="surveyThree"
          point="1"
          path={path}
        />
        <PointButton
          isSelected={userData.surveyThree === 2}
          name="surveyThree"
          point="2"
          path={path}
        />
        <PointButton
          isSelected={userData.surveyThree === 3}
          name="surveyThree"
          point="3"
          path={path}
        />
        <PointButton
          isSelected={userData.surveyThree === 4}
          name="surveyThree"
          point="4"
          path={path}
        />
        <PointButton
          isSelected={userData.surveyThree === 5}
          name="surveyThree"
          point="5"
          path={path}
        />
      </PointButtonContainer>
    </>
  );
};

export default SurveyQuestion;
