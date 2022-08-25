import React, { MouseEvent, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import modalAtom from '../recoil/modalAtom';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';

const Modal = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate();
  const setModalState = useSetRecoilState(modalAtom);

  const handleModalClick = useCallback((e: MouseEvent) => {
    e.preventDefault();
    setModalState(null);
  }, []);

  const handleHomeClick = (e: MouseEvent) => {
    setModalState(null);
    navigate('/');
  };

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <ModalContainer>
      <DialogBox>
        <FormContainer>{children}</FormContainer>
        <CompleteButton onClick={handleHomeClick}>홈으로 이동</CompleteButton>
      </DialogBox>
      <Backdrop onClick={handleModalClick} />
    </ModalContainer>
  );
};

export default Modal;

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 40%;
  left: 50%;
  z-index: 60;
  transform: translate(-50%, -50%);
`;

const DialogBox = styled.dialog`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 350px;
  height: 280px;
  max-height: 90vh;
  padding: 2rem 4rem;
  border: none;
  border-radius: 15px;
  box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
  box-sizing: border-box;
  background-color: white;
  font-size: 1.2rem;
  white-space: nowrap;
  overflow: auto;
  position: relative;
  z-index: 10000;
`;

const CompleteButton = styled.button`
  border: none;
  color: white;
  width: 350px;
  height: 50px;
  position: absolute;
  bottom: 0;
  background-color: ${({ theme }) => theme.mainColor};
  font-size: 20px;
  cursor: pointer;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  & > * {
    margin-bottom: 1rem;
  }
`;

const Backdrop = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 9999;
  backdrop-filter: blur(2px);
`;
