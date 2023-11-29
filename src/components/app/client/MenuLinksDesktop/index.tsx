'use client';
import { menuLinks } from '@/data';
import { lora } from '@/fonts';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MenuLinksDesktop() {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ href, name }, i) => (
        <li
          key={href}
          className={`border-b border-solid border-b-transparent hover:border-b-black ${
            pathname === href ? 'border-b-black' : ''
          } hidden md:block ${
            i === 0 ? 'ml-5 mr-5' : i !== menuLinks.length - 1 ? 'mr-5' : ''
          }`}
        >
          <Link href={href} className={`text-sm lg:text-lg ${lora.className}`}>
            {name}
          </Link>
        </li>
      ))}
    </>
  );
}
