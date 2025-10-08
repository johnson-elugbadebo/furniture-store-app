/* eslint-disable react-refresh/only-export-components */
import { FeaturedProducts, Hero } from '@/components';
import { customFetch, type ProductsResponse } from '@/utils';
import { type LoaderFunction } from 'react-router-dom';

const url = '/products?featured=true';

export const loader: LoaderFunction = async (): Promise<ProductsResponse> => {
  const response = await customFetch<ProductsResponse>(url);
  return { ...response.data };
};

function Landing() {
  // const result = useLoaderData() as ProductsResponse;
  // console.log(result);
  return (
    <div className='-mx-8'>
      <Hero />
      <FeaturedProducts />
    </div>
  );
}

export default Landing;
