'use client';
import Image from 'next/image';
import { Slider } from '@/components/app/client/Slider';
import { useState } from 'react';
import Slick from 'react-slick';
import { colors } from '@/styles/variables';

export function SlugProductImages({ images }: { images: string[] }) {
  const [sliderRef, setSliderRef] = useState<Slick | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <div className='hidden md:block col-1'>
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
            <div className='relative' style={{ height: '60px' }}>
              <Image
                src={src}
                alt={src}
                className='object-cover md:object-contain'
                fill
              />
            </div>
          </div>
        ))}
      </div>
      <div className='col-12 md:col-5'>
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
            <div className='p-4' key={`${src}-${i}`}>
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
