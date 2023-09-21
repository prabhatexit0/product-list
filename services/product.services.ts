import { useQuery } from 'react-query'
import axios from '@/config/axios.config'

const fetchProducts = async () => {
  const res = await axios('/products')
  return res
}

export default function useProducts() {
  return useQuery('products', fetchProducts)
}