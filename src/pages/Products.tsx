/* eslint-disable react-refresh/only-export-components */
import { Filters, ProductsContainer, PaginationContainer } from '@/components';
import { customFetch, type ProductsResponse, type ProductsResponseWithParams } from '../utils';
import { type LoaderFunction } from 'react-router-dom';

const url = '/products';

export const loader: LoaderFunction = async ({ request }): Promise<ProductsResponseWithParams> => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  // console.log(params);

  const response = await customFetch<ProductsResponse>(url, { params });

  return { ...response.data, params };
};

function Products() {
  return (
    <div className='-mx-8'>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </div>
  );
}
export default Products;
