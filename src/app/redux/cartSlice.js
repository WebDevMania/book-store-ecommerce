import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    books: []
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addBook: (state, action) => {
            const book = state.books.find((book) => book.id === action.payload.id)

            if (book) {
                book.quantity = action.payload.quantity
            } else {
                state.books.push(action.payload)
            }
        },
        removeBook: (state, action) => {
            state.books = state.books.filter((book) => book.id !== action.payload.id)
        }
    }
})

export const { addBook, removeBook } = cartSlice.actions

export default cartSlice.reducer