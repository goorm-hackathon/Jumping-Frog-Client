import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'JumpingFrogUserData',
  storage: localStorage,
});

type UserTypes = {
  age: string;
  name: string;
  gender: string;
  email: string;
  interests: string[];
  surveyOne: number;
  surveyTwo: number;
};

const userAtom = atom<UserTypes>({
  key: 'userAtom', // 해당 atom의 고유 key
  default: {
    age: '',
    name: '',
    gender: '',
    email: '',
    interests: [],
    surveyOne: 0,
    surveyTwo: 0,
  }, // 기본값
  effects_UNSTABLE: [persistAtom],
});

export default userAtom;
