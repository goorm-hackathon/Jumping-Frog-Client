import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import userAtom from '../recoil/userAtom';

const PointButton = ({
  point,
  path,
  name,
}: {
  point: string;
  path: string;
  name: string;
}) => {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(userAtom);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const { value, name } = e.currentTarget;
    setUserData({
      ...userData,
      [name]: +value,
    });
    navigate(path);
  };
  return (
    <SurveyPointButton onClick={handleClick} name={name} value={point}>
      {point}
    </SurveyPointButton>
  );
};

export default PointButton;

const SurveyPointButton = styled.button`
  text-align: center;
  width: 62px;
  height: 55px;
  background-color: #f6f4ee;
  border: 2px solid rgb(246, 244, 238);
  opacity: 40%;
  font-weight: 600;
  cursor: pointer;
  border-radius: 12px;
  &:hover {
    background-color: gray;
  }
`;
