'use client';
import { appShowSidebarMenu } from '@/store/actions/app';
import Image from 'next/image';
import Link from 'next/link';

export function LogoButton() {
  return (
    <Link
      href='/'
      className='col-4 md:col-2 flex items-center justify-center md:justify-start'
      onClick={() => {
        appShowSidebarMenu({ isShow: false });
      }}
    >
      <Image
        src='/assets/logo.png'
        alt='logo'
        width={160}
        height={80}
        priority
      />
    </Link>
  );
}
