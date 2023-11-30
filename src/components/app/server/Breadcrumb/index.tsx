import React from 'react';
import Link from 'next/link';
import { colors } from '@/styles/variables';
import { ArrowLeftIcon } from '@/components/icons';

interface Breadcrumb {
  label: string;
  href: string;
}

export function BreadCrumb({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
  return (
    <div className='flex justify-start py-1'>
      {breadcrumbs.map(({ label, href }) => (
        <React.Fragment key={href}>
          <div
            className='flex items-center justify-center mr-2'
            style={{ width: '12px' }}
          >
            <ArrowLeftIcon fill={colors.color1} />
          </div>
          <Link
            href={href}
            className='border-b border-solid border-b-transparent hover:border-b-black text-sm sm:text-base mr-2'
            style={{ color: colors.color1 }}
          >
            {label}
          </Link>
        </React.Fragment>
      ))}
    </div>
  );
}
