import { BreadCrumb, Products, SlugProduct } from '@/components/app';
import { getProductBySlug, products } from '@/data';
import { lora } from '@/fonts';
import { redirect } from 'next/navigation';

export default async function RingProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return redirect('/exclusive-jewelry/rings');
  }

  return (
    <main className='pt-4'>
      <section className='container mb-4'>
        <BreadCrumb
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Shop All', href: '/exclusive-jewelry' },
            { label: 'Rings', href: '/exclusive-jewelry/rings' },
          ]}
        />
      </section>

      <SlugProduct product={product} />

      <h2 className={`text-xl text-center mt-8 mb-4 ${lora.className}`}>
        You Might Also Like
      </h2>
      <Products products={products.filter(({ type }) => type === 'bracelet')} />
    </main>
  );
}
