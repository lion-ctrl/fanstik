'use client';
import { appShowSidebarMenu } from '@/store/actions/app';
import { AppSelector } from '@/store/selectors';
import { AppProvider } from '@/components/app/client/AppProvider';

export function HamburguerButton() {
  return (
    <AppProvider>
      <HamburguerButtonChild />
    </AppProvider>
  );
}

export function HamburguerButtonChild() {
  const appState = AppSelector();

  return (
    <div
      className='relative'
      onClick={() => {
        appShowSidebarMenu({ isShow: !appState.isShowingSidebarMenu });
      }}
    >
      <div
        className={`nav_hamburger-lines ${
          appState.isShowingSidebarMenu ? 'is-active' : 'not-active'
        }`}
      >
        <span className='line line1'></span>
        <span className='line line2'></span>
        <span className='line line3'></span>
      </div>
    </div>
  );
}
