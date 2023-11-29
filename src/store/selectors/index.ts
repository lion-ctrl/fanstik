import { useSelector } from 'react-redux';
import { RootState } from '..';

export const AppSelector = () => useSelector((state: RootState) => state.app);
