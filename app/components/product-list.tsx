import { ProductType } from '@/types/product.type';
import { useProducts } from '@/services/product.services';
import { useState, useEffect } from 'react';
import PageControl from './page-control';
import Toolbar from './toolbar';
import Product from './product';

export default function ProductList() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('all');
  const { data, isError, isLoading } = useProducts({ search, page, category });
  const [sortCateogry, setSortCategory] = useState<
    'ascending' | 'descending' | 'default'
  >('default');

  const [productList, setProductList] = useState(data?.data.products || []);

  useEffect(() => {
    const productList = [...(data?.data.products || [])];
    if (sortCateogry == 'ascending') {
      setProductList(productList.sort((a, b) => a.price - b.price));
    } else if (sortCateogry == 'descending') {
      setProductList(productList.sort((a, b) => b.price - a.price));
    } else {
      setProductList(productList);
    }
  }, [data, sortCateogry]);

  if (isError) {
    return <div>Error Occoured!</div>;
  }

  return (
    <div className="flex flex-col gap-5 w-full items-center w-full">
      <Toolbar
        setCateogry={setCategory}
        setSearch={setSearch}
        setSortCategory={setSortCategory}
      />
      {isLoading ? (
        <div>Loading ... </div>
      ) : (
        productList.map((product: ProductType) => {
          return <Product key={product.id} {...product} />;
        })
      )}
      <PageControl
        page={page}
        totalNumberOfItems={data?.data.total || 0}
        setPage={setPage}
      />
    </div>
  );
}
