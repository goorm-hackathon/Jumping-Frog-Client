import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { regEmail } from '../../utils/regex';
import Progress from '../../components/ProgressBar';
import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
import modalAtom from '../../recoil/modalAtom';
import userAtom from '../../recoil/userAtom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

interface IForm {
  name: string;
  email: string;
}

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const setModal = useSetRecoilState(modalAtom);
  const [userData, setUserData] = useRecoilState(userAtom);
  const resetUserData = useResetRecoilState(userAtom);
  const navigate = useNavigate();

  interface IUserProps {
    name: string;
    email: string;
  }

  const onVaild = async (data: IUserProps) => {
    const { name, email } = data;

    setUserData({
      ...userData,
      name,
      email,
    });

    const UData = localStorage.getItem('JumpingFrogUserData');
    const tmpData = JSON.parse(UData as string);
    const { interests: userInterests } = tmpData.userAtom;

    const parsedInterests = userInterests.reduce((acc: [], cur: any) => {
      return [...acc, { jobCode: cur }];
    }, []);

    const postData = {
      ...tmpData.userAtom,
      interests: parsedInterests,
      email: data.email,
      name: data.name,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/subscribe`,
        postData,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      console.log(response);
      setModal('End');
    } catch (e: any) {
      alert(e.message);
      navigate('/');
    }

    // POST 후 local storage 및 전역 데이터 비우기
    localStorage.removeItem('JumpingFrogUserData');
    resetUserData();
  };

  return (
    <Container>
      <Progress percent={100} />
      <Form onSubmit={handleSubmit(onVaild)}>
        <Title>이름을 알려주세요:)</Title>
        <Input
          {...register('name', {
            required: '이름은 꼭 입력해주세요:(',
            maxLength: {
              value: 10,
              message: '이름은 10자를 넘을 수 없어요:(',
            },
          })}
        ></Input>
        <ErrorMessage>{errors?.name?.message}</ErrorMessage>
        <Title>뉴스레터를 받으실 이메일 주소를 알려주세요:)</Title>
        <Input
          {...register('email', {
            required: '이메일은 꼭 입력해주세요:(',
            pattern: {
              value: regEmail,
              message: '올바른 이메일을 입력해주세요:(',
            },
          })}
        ></Input>
        <ErrorMessage>{errors?.email?.message}</ErrorMessage>
        <SubmitButton>제출하기</SubmitButton>
      </Form>
    </Container>
  );
};

export default Register;

const Container = styled.div``;

const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  margin: 50px 0 20px 0;
`;

const Input = styled.input`
  height: 52px;
  width: 342px;
  font-size: 24px;
  padding-left: 10px;
  border-radius: 10px;
  background-color: rgb(246, 244, 238);
  border: 2px solid rgb(246, 244, 238);
`;

const ErrorMessage = styled.span`
  margin: 1rem 0;
  font-size: 1rem;
  color: ${({ theme }) => theme.warningRed};
`;

const SubmitButton = styled.button`
  margin-top: 50px;
  height: 52px;
  width: 342px;
  font-size: 18px;
  background-color: ${({ theme }) => theme.mainColor};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    opacity: 0.85;
  }
`;
