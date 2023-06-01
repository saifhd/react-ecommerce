import { StarIcon } from '@heroicons/react/24/solid'
import { ProductType } from '../pages/Home'
import { CartProduct } from '../store/features/CartSlice'

type Props = {
    "product" : ProductType,
    "handleAddToCart" : (product:CartProduct) => void
}

function Product({product, handleAddToCart}: Props) {
  const {id, title, description, price, image, rating, category} = product;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-6" key={id}>
              <img className="h-64 mx-auto" src={image} alt={title} />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                  {description}
                </p>
              </div>
              <div className='flex justify-between px-6'>
                <h3>Rs {price}</h3>
                <div>
                  <div className='flex space-x-1'>
                    {
                      (new Array(2)).fill(rating.rate).map((_) => {
                        return (
                          <StarIcon className='w-4 h-4 text-yellow-500' />
                        )
                      })
                    }
                  </div>
                  <span>{ rating.count } Reviews</span>
                </div>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{category}</span>
              </div>
              <div className='px-4 mb-4'>
                <button onClick={() => handleAddToCart({id, title, price, category, image, "qty" : 1})} className='bg-blue-600 hover:bg-blue-400 font-semibold text-md text-white px-6 py-4 w-full rounded-md'>Add to cart</button>
              </div>

            </div>
  )
}

export default Product