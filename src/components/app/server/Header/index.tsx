import Link from 'next/link';
import { HandBagIcon, SearchIcon } from '@/components/icons';
import { colors } from '@/styles/variables';
import {
  HamburguerButton,
  LogoButton,
  MenuLinksDesktop,
} from '@/components/app';
import { lora } from '@/fonts';

export const Header = () => {
  return (
    <header
      className='sticky top-0 z-50'
      style={{
        backgroundColor: colors.white,
        borderBottom: `1px solid ${colors.color1}`,
        height: 88,
        color: colors.color1,
      }}
    >
      <nav className='h-full'>
        <div className='container h-full row py-3'>
          <LogoButton />

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
