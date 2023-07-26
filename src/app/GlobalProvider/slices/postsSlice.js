'use client'
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    test: 'test',
    postsLoading: true
}

export const fetchGetAllPosts = createAsyncThunk(
    'posts/fetchGetAllPosts',
    async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!response.ok) throw new Error('Unable to fetch posts!')
        return response.json()
    }
)
export const fetchGetPostsBySearch = createAsyncThunk(
    'posts/fetchGetPostsBySearch',
    async (search) => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts?q=${search}`)
        if (!response.ok) throw new Error('Unable to fetch posts!')
        return response.json()
    }
)

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        changePosts: (state, action) => {
            state.posts = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGetAllPosts.pending, state => { state.postsLoading = true })
            .addCase(fetchGetAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload
                state.postsLoading = false
            })
            .addCase(fetchGetAllPosts.rejected, (state, action) => {
                state.searchLoadingStatus = action.error.code
            })

            .addCase(fetchGetPostsBySearch.pending, state => { state.postsLoading = true })
            .addCase(fetchGetPostsBySearch.fulfilled, (state, action) => {
                state.posts = action.payload
                state.postsLoading = false
            })
            .addCase(fetchGetPostsBySearch.rejected, (state, action) => {
                state.searchLoadingStatus = action.error.code
            })
            .addDefaultCase(() => { })
    }
})

const { actions, reducer } = searchSlice

export const {
    changePosts
} = actions

export default reducer