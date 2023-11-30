import { BreadCrumb, Products } from '@/components/app';
import { products } from '@/data';
import { lora } from '@/fonts';
import React from 'react';

export default function EngravableJewelryPage() {
  return (
    <main className='pt-4'>
      <section className='container mb-4'>
        <BreadCrumb breadcrumbs={[{ label: 'Home', href: '/' }]} />
      </section>
      <h1 className={`text-center text-4xl ${lora.className}`}>Engravable</h1>
      <Products
        products={products.filter(
          ({ engravable, type }) => engravable && type !== 'pet'
        )}
        showProductCount
      />
    </main>
  );
}
