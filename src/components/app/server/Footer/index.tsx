import { footerLinks } from '@/data';
import { lora } from '@/fonts';
import { colors } from '@/styles/variables';
import { Divider } from '@/components/app/server/Divider';
import Link from 'next/link';

export function Footer() {
  return (
    <footer
      className='px-8 py-4 mt-8'
      style={{ backgroundColor: colors.color2, color: colors.color1 }}
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
      <a href='tlf:+14075640222' className='block mt-4 text-sm hover:underline'>
        +1 407 564 0222
      </a>
      <a
        className='inline-block text-sm mt-4 hover:underline'
        href='mailto:fanstik@gmail.com'
      >
        fanstik@gmail.com
      </a>
      <Divider />
      <p className='text-sm text-center mt-4'>
        © 2023 Fanstik All rights reserved.
      </p>
      <div className='flex flex-wrap items-center justify-center mt-4'>
        {footerLinks.policies.map(({ href, name }) => (
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
