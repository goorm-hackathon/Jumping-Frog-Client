import { atom } from 'recoil';

type ModalTypes = null | 'End' | 'Middle';

const modalAtom = atom<ModalTypes>({
  key: 'modalAtom', // 해당 atom의 고유 key
  default: null, // 기본값
});

export default modalAtom;
