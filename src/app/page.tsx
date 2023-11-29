import { Slider } from '@/components/app';
import { products } from '@/data';
import { lora } from '@/fonts';
import { breakpoints } from '@/styles/variables';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <section className='block md:hidden relative hero-image-mobile'>
        <Image
          src='/assets/mobile-hero1.webp'
          alt='fanstik hero image'
          className='block md:hidden object-container'
          fill
        />
      </section>
      <section className='hidden md:block relative' style={{ height: 430 }}>
        <Image
          src='/assets/desktop-hero1.jpg'
          alt='fanstik hero image'
          className='hidden md:block object-container'
          fill
        />
      </section>
      <section className='container mt-8'>
        <h2 className={`text-2xl md:text-3xl md:hidden ${lora.className}`}>
          Gifting Made Easy
        </h2>
        <div className='row vg-8 mt-2'>
          <div className='col-6'>
            <h2
              className={`hidden md:block text-xl md:text-3xl ${lora.className}`}
            >
              Gifting Made Easy
            </h2>
            <div className='relative md:mt-2' style={{ height: 356 }}>
              <Image
                src='/assets/gift1.webp'
                alt='gift image 1'
                className='object-cover'
                fill
              />
            </div>
            <h3 className={`text-sm md:text-lg mt-2 ${lora.className}`}>
              Top gifts
            </h3>
          </div>
          <div className='col-6'>
            <div className='relative' style={{ height: 356 }}>
              <Image
                src='/assets/gift2.webp'
                alt='gift image 2'
                className='object-cover'
                fill
              />
            </div>
            <h3 className={`text-sm md:text-lg mt-2 ${lora.className}`}>
              Personalized gifts
            </h3>
          </div>
        </div>
        <div className='row vg-8 mt-8'>
          <div className='col-6'>
            <div className='relative' style={{ height: 356 }}>
              <Image
                src='/assets/gift3.webp'
                alt='gift image 3'
                className='object-cover'
                fill
              />
            </div>
            <h3 className={`text-sm md:text-lg mt-2 ${lora.className}`}>
              Gifts under 150$
            </h3>
          </div>
          <div className='col-6 py-8'>
            <div className='relative' style={{ height: 356 }}>
              <Image
                src='/assets/gift4.webp'
                alt='gift image 4'
                className='object-cover'
                fill
              />
            </div>
            <h3 className={`text-sm md:text-lg mt-2 ${lora.className}`}>
              Top fine gifts
            </h3>
          </div>
        </div>
      </section>
      <section className='container mt-8'>
        <div className='row hg-8 md:hg-0 vg-8'>
          <div className='col-12 md:col-6'>
            <div className='relative' style={{ height: 577 }}>
              <Image
                src='/assets/lookbook.webp'
                alt='lookbook'
                className='object-cover md:object-contain'
                fill
              />
            </div>
          </div>
          <div className='col-12 md:col-6 flex items-center justify-center'>
            <div>
              <h2 className={`text-2xl ${lora.className}`}>
                The Holiday Lookbook is Here
              </h2>
              <a className='border-b border-solid border-b-black inline-block mt-4 text-sm'>
                View lookbook
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='mt-8'>
        <Slider
          settings={{
            dots: false,
            infinite: true,
            initialSlide: 0,
            pauseOnHover: true,
            slidesToScroll: 1,
            slidesToShow: 3,
            speed: 500,
            swipeToSlide: true,
            responsive: [
              {
                breakpoint: breakpoints.xl,
                settings: {
                  arrows: true,
                  slidesToShow: 3,
                },
              },
              {
                breakpoint: breakpoints.lg,
                settings: {
                  arrows: true,
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: breakpoints.md,
                settings: {
                  arrows: true,
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: breakpoints.sm,
                settings: {
                  arrows: false,
                  slidesToShow: 2,
                },
              },
            ],
          }}
        >
          {products.map(({ href, src, name, price }, i) => (
            <div className='p-4' key={`${href}-${i}`}>
              <Link href={href}>
                <div className='relative slider-product-img'>
                  <Image
                    src={src}
                    alt='product'
                    className='object-cover'
                    fill
                  />
                </div>
                <h3 className={lora.className}>{name}</h3>
                <p className={lora.className}>{price}</p>
                <button className='py-1 rounded-md w-full sm:w-auto'>
                  See more
                </button>
              </Link>
            </div>
          ))}
        </Slider>
      </section>
    </main>
  );
}
