'use client';
import { configureStore } from '@reduxjs/toolkit'
import { createWrapper } from "next-redux-wrapper";
import posts from './slices/postsSlice'

const stringMiddleware = (store) => (next) => (action) => {
    if (typeof action === 'string') {
        return next({ type: action })
    }
    return next(action)
}

export const store = configureStore({
    reducer: {
        posts
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production'
})

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);