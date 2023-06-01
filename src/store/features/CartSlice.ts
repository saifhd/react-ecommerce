import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type Rating = {
    "rate" : number,
    "count" : number
}
export type CartProduct = {
    "id" : number,
    "title" : string,
    "image" : string,
    "price" : number,
    "category" : string,
    "qty" : number
}

interface IInitialState{
    products : CartProduct[],
    totalItems : number,
    totalAmount : number
}

const initialState:IInitialState = {
    products : JSON.parse(localStorage.getItem('cart-products') || '[]'),
    totalItems : parseInt(JSON.parse(localStorage.getItem('cart-count') || '0')),
    totalAmount : parseFloat(JSON.parse(localStorage.getItem('cart-total') || '0')),
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartProduct>) => {
            const existingProductIndex = state.products.findIndex(product => {
                return product.id === action.payload.id
            });
            if (existingProductIndex == -1) {
                action.payload["qty"] = 1
                state.products.push(action.payload)
            }
            else {
                state.products[existingProductIndex]['qty'] += 1 
            }

            const qty = action.payload.qty;
            const price = action.payload.price;

            state.totalItems += qty;
            state.totalAmount += qty * price

            localStorage.setItem('cart-products', JSON.stringify(state.products))
            localStorage.setItem('cart-total', JSON.stringify(state.totalAmount))
            localStorage.setItem('cart-count', JSON.stringify(state.totalItems))
        },

        removeFromCart(state, action: PayloadAction<number>) {
            const existingProductIndex = state.products.findIndex(product => {
                return product.id === action.payload
            });
            console.log(existingProductIndex)
            if (existingProductIndex !== -1) {
                const qty = state.products[existingProductIndex]['qty'] ?? 1;
                const price = state.products[existingProductIndex]['price'];

                state.products = state.products.filter(product => {
                    return product.id !== action.payload
                });

                state.totalItems -= qty;
                state.totalAmount = parseFloat((state.totalAmount - qty * price).toFixed(2));

                localStorage.setItem('cart-products', JSON.stringify(state.products))
                localStorage.setItem('cart-total', JSON.stringify(state.totalAmount))
                localStorage.setItem('cart-count', JSON.stringify(state.totalItems))
            }
        }
    }
})

export const {addToCart, removeFromCart} = cartSlice.actions

export default cartSlice.reducer