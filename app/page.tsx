'use client';

import { QueryClientProvider, QueryClient } from 'react-query';

const queryClient = new QueryClient();
import ProductList from './components/product-list';

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col items-center">
        <ProductList />
      </div>
    </QueryClientProvider>
  );
}
