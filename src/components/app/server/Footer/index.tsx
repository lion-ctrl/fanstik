import { footerLinks } from '@/data';
import { lora } from '@/fonts';
import { colors } from '@/styles/variables';
import Link from 'next/link';
import React from 'react';

export function Footer() {
  return (
    <footer
      className='px-8 py-4 mt-8'
      style={{ backgroundColor: colors.color2 }}
    >
      <div className='flex flex-col items-start'>
        {footerLinks.questions.map(({ href, name }) => (
          <Link
            key={href}
            href={href}
            className='border-b border-solid border-b-transparent hover:border-b-black mb-4 text-sm'
          >
            {name}
          </Link>
        ))}
      </div>
      <h4 className={`text-base ${lora.className}`}>Contact Us</h4>
      <p className='mt-4 text-sm'>000.000.0000</p>
      <a
        className='inline-block text-sm mt-4 underline'
        href='mailto:fasntik@gmail.com'
      >
        fasntik@gmail.com
      </a>
      <div
        className='border-b border-solid mt-14'
        style={{ borderBottomColor: colors.color1 }}
      />
      <p className='text-sm text-center mt-4'>
        © 2023 Fanstik All rights reserved.
      </p>
      <div className='flex flex-wrap items-center justify-center mt-4'>
        {footerLinks.questions.map(({ href, name }) => (
          <Link
            key={href}
            href={href}
            className='border-b border-solid border-b-transparent hover:border-b-black mr-4 text-sm'
          >
            {name}
          </Link>
        ))}
      </div>
    </footer>
  );
}
