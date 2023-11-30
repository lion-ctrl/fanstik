import { BreadCrumb, Products } from '@/components/app';
import { products } from '@/data';
import { lora } from '@/fonts';

export default function NecklacesPage() {
  return (
    <main className='pt-4'>
      <section className='container mb-4'>
        <BreadCrumb
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Shop All', href: '/exclusive-jewelry' },
          ]}
        />
      </section>
      <h1 className={`text-center text-4xl ${lora.className}`}>Necklaces</h1>
      <Products
        products={products.filter(({ type }) => type === 'necklace')}
        showProductCount
      />
    </main>
  );
}
