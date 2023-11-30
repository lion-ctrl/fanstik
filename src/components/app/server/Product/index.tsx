import { lora } from '@/fonts';
import Link from 'next/link';
import Image from 'next/image';

export function Product({
  href,
  src,
  name,
  price,
  includeButton = false,
}: {
  href: string;
  src: string;
  name: string;
  price?: string | number;
  includeButton?: boolean;
}) {
  return (
    <article className='product'>
      <Link href={href} className='product_link'>
        <div className='relative product_img'>
          <Image src={src} alt={name} className='object-cover' fill />
        </div>
        <h3 className={`product_title ${lora.className}`}>{name}</h3>
        {price !== null && <p className={`mt-2 ${lora.className}`}>{price}</p>}
        {includeButton && (
          <button className='p-1 rounded-md w-full sm:w-auto mt-2 product_button'>
            See more
          </button>
        )}
      </Link>
    </article>
  );
}
