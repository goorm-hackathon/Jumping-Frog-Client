import React from 'react';

import modalAtom from '../recoil/modalAtom';
import { useRecoilValue } from 'recoil';

import Modal from '../components/Modal';
import ModalContent from '../pages/register/ModalContent';

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
      default:
        return null;
    }
  };
  return [getModalPage];
}
