import { useQuery } from 'react-query';
import axios from '@/config/axios.config';
import { ResponseType } from '@/types/product.type';

type FetchProductProps = {
  search: string;
  limit: number;
  skip: number;
  category: string;
};

const fetchProducts = async ({
  search,
  limit,
  skip,
  category = 'all',
}: FetchProductProps) => {
  const url =
    category != 'all'
      ? `/products/category/${category}/?limit=${limit}&skip=${skip}`
      : `/products/search?q=${search}&limit=${limit}&skip=${skip}`;
  const res = await axios(url);
  return res as ResponseType;
};

type UseProductsProps = {
  search: string;
  page: number;
  category: string;
};
export function useProducts({
  search,
  page = 1,
  category = 'all',
}: UseProductsProps) {
  const limit = 10;
  const skip = (page - 1) * 10;
  return useQuery(['products', search, page, category], () =>
    fetchProducts({ search, limit, skip, category }),
  );
}

const fetchProductCategories = async () => {
  const res = await axios('/products/categories');
  return res.data;
};

export const useProductCategories = () => {
  return useQuery('productCategories', fetchProductCategories);
};
