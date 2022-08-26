import React from 'react';

import modalAtom from '../recoil/modalAtom';
import { useRecoilValue } from 'recoil';

import Modal from '../components/Modal';
import ModalContent from '../pages/register/ModalContent';
import ModalMidContent from '../components/ModalMidContent';

export default function useModal() {
  const getModalPage = () => {
    const modalState = useRecoilValue(modalAtom);
    switch (modalState) {
      case null:
        return null;
      case 'End':
        return (
          <Modal>
            <ModalContent />
          </Modal>
        );
      case 'Middle':
        return (
          <Modal timeout={2000}>
            <ModalMidContent />
          </Modal>
        );
      default:
        return null;
    }
  };
  return [getModalPage];
}
