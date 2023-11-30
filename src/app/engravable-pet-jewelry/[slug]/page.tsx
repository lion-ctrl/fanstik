import { BreadCrumb, Products, SlugProduct } from '@/components/app';
import { getProductBySlug, products } from '@/data';
import { lora } from '@/fonts';
import { redirect } from 'next/navigation';

export default async function PetProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    return redirect('/engravable-pet-jewelry');
  }

  return (
    <main className='pt-4'>
      <section className='container mb-4'>
        <BreadCrumb
          breadcrumbs={[
            { label: 'Home', href: '/' },
            { label: 'Pet jewelry', href: '/engravable-pet-jewelry' },
          ]}
        />
      </section>

      <SlugProduct product={product} />

      <h2 className={`text-xl text-center mt-8 mb-4 ${lora.className}`}>
        You Might Also Like
      </h2>
      <Products
        products={products.filter(
          ({ slug, type }) => slug !== params.slug && type === 'pet'
        )}
      />
    </main>
  );
}
