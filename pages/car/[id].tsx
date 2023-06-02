import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Car: NextPage = () => {
    const { query } = useRouter()
    console.log(query.id)
    return (
        <h2>
            Car
        </h2>
    )
}

export default Car