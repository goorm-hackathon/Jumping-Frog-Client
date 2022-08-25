import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { regEmail } from '../../utils/regex';
import Progress from '../../components/ProgressBar';
import { useSetRecoilState } from 'recoil';
import modalAtom from '../../recoil/modalAtom';

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

  // TODO: 전역에 저장된 Survey 데이터를 불러와서 입력 받은 데이터를 합쳐 POST 요청
  const onVaild = (data: any) => {
    console.log(data);
    setModal('End');
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
        <ErrorMessage>{errors?.name?.message}</ErrorMessage>
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
