import { useDispatch } from 'react-redux';

import { AppDispatch } from '../store/configuration';

export const useAppDispatch: () => AppDispatch = useDispatch;
