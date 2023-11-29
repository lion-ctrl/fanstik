import { store } from '@/store';
import { appSlice } from '@/store/reducers/app';

export const appShowSidebarMenu = ({ isShow }: { isShow: boolean }) => {
  store.dispatch(appSlice.actions.showSidebarMenu(isShow));
};
