import Image from 'next/image';
import { lora } from '@/fonts';
import { colors } from '@/styles/variables';
import { Product } from '@/types/product';
import { Divider, SlugProductImages } from '@/components/app';

interface Props {
  product: Product;
}

export function SlugProduct({ product }: Props) {
  return (
    <section className='container'>
      <div className='row'>
        <SlugProductImages images={product.productImages!} />
        <div className='col-12 md:col-6'>
          <h1 className={`text-2xl ${lora.className}`}>{product.name}</h1>
          <p className={`text-xl mt-1 ${lora.className}`}>{product.price}</p>
          <p className={`text-base mt-1 mb-6 ${lora.className}`}>
            {product.advice}
          </p>
          <button
            className='p-1 rounded-md w-full hover:opacity-80'
            style={{ color: colors.white, backgroundColor: colors.color1 }}
          >
            Add to bag
          </button>
          <div className='flex items-center justify-center mt-4'>
            <p className='italic text-sm text-center mr-2'>
              Buy now, pay later.
            </p>
            <div className='relative' style={{ height: '30px', width: '55px' }}>
              <Image
                src='/assets/stripe-logo.png'
                alt='stripe-logo'
                className='object-container'
                fill
              />
            </div>
          </div>
          <Divider />
          <p className={`text-lg ${lora.className}`}>Details</p>
          <p className={`text-sm mt-2`}>{product.details}</p>
          <ul className='list-disc mt-4 pl-8 text-sm'>
            {product.detailsList?.map((text, i) => (
              <li key={`${text}-${i}`}>{text}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
