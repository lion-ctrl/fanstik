import { BreadCrumb, Product, Products, Slider } from '@/components/app';
import { jewelryCategories, products } from '@/data';
import { lora } from '@/fonts';
import { breakpoints } from '@/styles/variables';
import React from 'react';

export default function ExclusiveJewelryPage() {
  return (
    <main className='pt-4'>
      <section className='container mb-4'>
        <BreadCrumb breadcrumbs={[{ label: 'Home', href: '/' }]} />
      </section>
      <h1 className={`text-center text-4xl mb-2 ${lora.className}`}>
        Shop All
      </h1>
      <section className='container mb-10'>
        <Slider
          settings={{
            autoplay: true,
            autoplaySpeed: 5000,
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
                  arrows: true,
                  slidesToShow: 1,
                },
              },
            ],
          }}
        >
          {jewelryCategories.map(({ href, src, name }, i) => (
            <div className='p-4' key={`${href}-${i}`}>
              <Product href={href} name={name} src={src} />
            </div>
          ))}
        </Slider>
      </section>
      <Products products={products} showProductCount />
    </main>
  );
}
