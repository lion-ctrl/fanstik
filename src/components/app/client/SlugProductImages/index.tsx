'use client';
import Image from 'next/image';
import { Slider } from '@/components/app/client/Slider';
import { useState } from 'react';
import Slick from 'react-slick';
import { colors } from '@/styles/variables';

export function SlugProductImages({
  images,
  isEngravable,
}: {
  images: string[];
  isEngravable?: boolean;
}) {
  const [sliderRef, setSliderRef] = useState<Slick | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className='col-12 md:col-1 flex md:block items-center justify-center order-2 md:order-none'>
        {images.map((src, i) => (
          <div
            className={`py-4 cursor-pointer border border-solid`}
            style={{
              borderColor: activeSlide === i ? colors.color1 : 'transparent',
            }}
            key={`${src}-${i}`}
            onClick={() => {
              setActiveSlide(i);
              sliderRef?.slickGoTo(i);
            }}
          >
            <div className='relative w-20 md:w-auto' style={{ height: '60px' }}>
              <Image src={src} alt={src} className='object-contain' fill />
            </div>
          </div>
        ))}
      </div>
      <div className='col-12 md:col-5 order-1 md:order-none relative'>
        {isEngravable && (
          <p
            className='absolute border border-solid left-2 p-2 top-2 z-10'
            style={{
              backgroundColor: colors.color2,
              color: colors.color1,
              borderColor: colors.color1,
            }}
          >
            Engravable
          </p>
        )}
        <Slider
          settings={{
            autoplay: true,
            autoplaySpeed: 5000,
            dots: false,
            infinite: true,
            initialSlide: 0,
            pauseOnHover: true,
            slidesToScroll: 1,
            slidesToShow: 1,
            speed: 500,
            swipeToSlide: true,
            arrows: false,
            beforeChange: (_, next) => {
              setActiveSlide(next);
            },
          }}
          getRef={setSliderRef}
        >
          {images.map((src, i) => (
            <div key={`${src}-${i}`}>
              <div className='relative product_img'>
                <Image src={src} alt={src} className='object-cover' fill />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
