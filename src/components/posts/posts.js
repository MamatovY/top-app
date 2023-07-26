'use client'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGetAllPosts } from '../../app/GlobalProvider/slices/postsSlice'
import Link from 'next/link'

const Posts = () => {
    const { posts, postsLoading } = useSelector(state => state.posts)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchGetAllPosts())
    }, [])

    return (
        <ul>
            {posts.map((post) => {
                return (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>
                            {post.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default Posts