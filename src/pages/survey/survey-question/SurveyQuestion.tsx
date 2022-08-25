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
      <SurveyTitle content="당신의 성향을 체크해주세요." />
      <SurveySubTitle content="나는 현재 제주도에 취업시장이 다양한 직업군에 접근할 수 있도록 활성화 되어 있다고 생각해요" />
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
