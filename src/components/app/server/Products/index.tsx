import { lora } from '@/fonts';
import { Product } from '@/components/app';

interface Props {
  products: {
    href: string;
    src: string;
    name: string;
    price: string;
    type: string;
  }[];
  showProductCount?: boolean;
}

export function Products({ products, showProductCount = false }: Props) {
  return (
    <section className='container'>
      {showProductCount && (
        <p className={`text-ms mb-8 ${lora.className}`}>
          {products.length} Products
        </p>
      )}
      <div className='row hg-32 vg-8'>
        {products.map(({ href, name, price, src }, i) => (
          <div key={`${href}-${src}-${i}`} className='col-12 sm:col-6 lg:col-4'>
            <Product
              href={href}
              src={src}
              name={name}
              price={price}
              includeButton
            />
          </div>
        ))}
      </div>
    </section>
  );
}
