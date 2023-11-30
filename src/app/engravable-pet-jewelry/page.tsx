import { BreadCrumb, Products } from '@/components/app';
import { products } from '@/data';
import { lora } from '@/fonts';
import React from 'react';

export default function EngravablePetJewelryPage() {
  return (
    <main className='pt-4'>
      <section className='container mb-4'>
        <BreadCrumb breadcrumbs={[{ label: 'Home', href: '/' }]} />
      </section>
      <h1 className={`text-center text-4xl ${lora.className}`}>
        Engravable Pet
      </h1>
      <Products
        products={products.filter(({ type }) => type === 'pet')}
        showProductCount
      />
    </main>
  );
}
