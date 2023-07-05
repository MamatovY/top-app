import Link from 'next/link'

export const metadata = {
    title: 'Blog',
    description: 'Blog page',
}

async function getData() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        next: {
            revalidate: 60
        }
    })

    if (!response.ok) throw new Error('Unable to fetch posts!')

    return response.json()
}

const Blog = async () => {
    const posts = await getData()
    return (
        <>
            <h2>
                Blog
            </h2>
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
        </>
    )
}

export default Blog