import React from 'react'
import { CartProduct as CartProductType } from '../store/features/CartSlice'

type Props = {
    product: CartProductType,
    handleRemoveFromCart: (id:number) => void
}

const CartProduct = ({product, handleRemoveFromCart}: Props) => {
  const {id, title, category, image, qty, price} = product
  return (
    <div className="md:flex items-center mt-14 py-8 border-t border-gray-200">
        <div className="w-1/4">
            <img src={image} alt={title} className="w-full h-full object-center object-cover" />
        </div>
        <div className="md:pl-3 md:w-3/4">
            <p className="text-xs leading-3 text-gray-800 md:pt-0 pt-4">{category}</p>
            <div className="flex items-center justify-between w-full pt-1">
                <p className="text-base font-black leading-none text-gray-800">{title}</p>
                <p className="text-base font-black leading-none text-gray-800">Quantity - {qty}</p>
            </div>
            <div className="flex items-center justify-between pt-5 pr-6">
                <div className="flex itemms-center">
                    <p onClick={() => handleRemoveFromCart(id)} className="text-xs leading-3 underline text-red-500 pl-5 cursor-pointer">Remove</p>
                </div>
                <p className="text-base font-black leading-none text-gray-800">Rs{price}</p>
            </div>
        </div>
    </div>
  )
}

export default CartProduct