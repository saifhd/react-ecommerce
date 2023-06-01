import axios from 'axios'
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/24/solid'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addToCart, CartProduct } from '../store/features/CartSlice'
import Product from '../components/Product'

type Props = {}
type Rating = {
  "rate" : number,
  "count" : number
}
export type ProductType = {
  "id" : number,
  "title" : string,
  "image" : string,
  "price" : number,
  "description" : string,
  "category" : string
  "rating" : Rating
}


function Home({}: Props) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const dispatch = useAppDispatch();

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async ():Promise<void> => {
    const data = await (await axios.get('https://fakestoreapi.com/products')).data;
    setProducts(data)
  }

  const handleAddToCart = (product: CartProduct) => {
    product['qty'] = 1;
    dispatch(addToCart(product))
  }

  return (
    <div>
      <div className="grid grid-cols-3 gap-2">
      {
        products.map((product) => {
          return (
            <Product product={product} handleAddToCart={handleAddToCart} />
          )
        })
      }
      </div>
    </div>
  )
}

export default Home