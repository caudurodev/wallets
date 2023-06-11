import { useQuery } from "react-query"
import { fetchGraphql, GET_WALLETS } from '@/models/wallets/fetch'

export const Wallets = () => {
    const { isLoading, error, data } = useQuery('wallets', () => fetchGraphql(GET_WALLETS));
    if (isLoading || !data) return <div>Loading...</div>
    if (error) return (<div>Error fetching wallets.</div>)
    return (
        <div>
            {data?.map((w, id) => <div key={id}>{w.name}</div>)}
        </div>
    )
}