'use client';
import { AppSelector } from '@/store/selectors';
import { colors } from '@/styles/variables';
import { AppProvider } from '@/components/app/client/AppProvider';
import Link from 'next/link';
import {
  ArrowRightIcon,
  CellPhoneIcon,
  LocationPinIcon,
} from '@/components/icons';
import { menuLinks } from '@/data';
import { lora } from '@/fonts';
import { appShowSidebarMenu } from '@/store/actions/app';

export function SidebarMenu() {
  return (
    <AppProvider>
      <SidebarMenuChild />
    </AppProvider>
  );
}

export function SidebarMenuChild() {
  const appState = AppSelector();

  return (
    <>
      <div
        className={`fixed bottom-0 left-0 ${
          appState.isShowingSidebarMenu
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } right-0 top-0 w-full z-10 glassmorphism-background`}
        style={{
          height: 'calc(100vh - 80px)',
          top: '88px',
          transition: 'opacity 0.5s ease-in-out',
        }}
        onClick={() => {
          appShowSidebarMenu({ isShow: false });
        }}
      />
      <aside
        className='fixed left-0 w-full sm:w-3/6 z-20'
        style={{
          backgroundColor: colors.white,
          height: 'calc(100vh - 80px)',
          top: '88px',
          transform: appState.isShowingSidebarMenu
            ? 'translateX(0)'
            : 'translateX(-100%)',
          transition: 'transform 0.5s ease-in-out',
        }}
        onClick={() => {
          appShowSidebarMenu({ isShow: false });
        }}
      >
        <div className='flex flex-col h-3/5 pt-6'>
          {menuLinks.map(({ href, name }) => (
            <Link
              key={href}
              href={href}
              className='flex items-center justify-between mb-8 px-4 text-xl'
            >
              <p
                className={`border-b border-solid border-b-transparent hover:border-b-black ${lora.className}`}
              >
                {name}
              </p>
              <div style={{ width: '25px' }}>
                <ArrowRightIcon />
              </div>
            </Link>
          ))}
        </div>
        <div
          className='flex flex-col h-2/5 pt-8 w-full'
          style={{ borderTop: `1px solid ${colors.gray}` }}
        >
          <Link
            href={'#'}
            className='flex items-center justify-start mb-8 px-4 text-base'
          >
            <div className='mr-1' style={{ width: '20px' }}>
              <CellPhoneIcon />
            </div>
            <p className={lora.className}>Contact us</p>
          </Link>
          <Link
            href={'#'}
            className='flex items-center justify-start mb-8 px-4 text-base'
          >
            <div className='mr-1' style={{ width: '20px' }}>
              <LocationPinIcon />
            </div>
            <p className={lora.className}>Find us</p>
          </Link>
        </div>
      </aside>
    </>
  );
}
