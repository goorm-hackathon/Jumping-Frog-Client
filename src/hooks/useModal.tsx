import React from 'react';

import modalAtom from '../recoil/modalAtom';
import { useRecoilValue } from 'recoil';

import Modal from '../components/Modal';
import End from '../pages/end/End';

export default function useModal() {
  const getModalPage = () => {
    const modalState = useRecoilValue(modalAtom);
    switch (modalState) {
      case null:
        return null;
      case 'End':
        return (
          <Modal>
            <End />
          </Modal>
        );
      default:
        return null;
    }
  };
  return [getModalPage];
}
