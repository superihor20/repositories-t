import { useSelector } from 'react-redux';

import { RootState } from '../store/configuration';

import type { TypedUseSelectorHook } from 'react-redux';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
