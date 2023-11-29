import Link from 'next/link';
import Image from 'next/image';
import { HandBagIcon, SearchIcon } from '@/components/icons';
import { colors } from '@/styles/variables';
import { HamburguerButton, MenuLinksDesktop } from '@/components/app';
import { lora } from '@/fonts';

export const Header = () => {
  return (
    <header
      className='sticky top-0 z-10'
      style={{
        backgroundColor: colors.white,
        borderBottom: `1px solid ${colors.gray}`,
        height: 88,
      }}
    >
      <nav className='h-full'>
        <div className='container h-full row py-3'>
          <Link
            href='/'
            className='col-4 md:col-2 flex items-center justify-center md:justify-start'
          >
            <Image
              src='/logo.png'
              alt='logo'
              width={160}
              height={80}
              priority
            />
          </Link>

          <ul className='col-8 md:col-10 flex items-center justify-end md:justify-center text-sm'>
            <MenuLinksDesktop />

            <div className='grow' />

            <li className='mr-5 sm:mr-10 md:mr-5'>
              <div style={{ width: '24px' }} className='cursor-pointer'>
                <SearchIcon />
              </div>
            </li>
            <li className='hidden md:block mr-5'>
              <Link
                href={'/sign-in'}
                className={`text-sm lg:text-lg ${lora.className}`}
              >
                Sign In
              </Link>
            </li>
            <li className='mr-5 sm:mr-10 md:mr-0'>
              <div style={{ width: '24px' }} className='cursor-pointer'>
                <HandBagIcon />
              </div>
            </li>
            <li className='md:hidden'>
              <HamburguerButton />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
