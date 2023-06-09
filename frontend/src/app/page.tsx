'use client'
// import { QueryClientProvider, QueryClient } from "react-query"
import { request, gql } from "graphql-request"
import { QueryClientProvider, QueryClient, useQuery } from "react-query"

const queryClient = new QueryClient()


export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wallets />
    </QueryClientProvider>
  )
}

const fetchGraphql = async (query) => {
  const data = await request(process.env.NEXT_PUBLIC_NHOST_BACKEND_URL, query)
  return data
}


const Wallets = () => {
  const { isLoading, error, data } = useQuery('wallets', () => fetchGraphql(GET_WALLETS));

  console.log('data', data)
  return (<div>
    {data?.wallet?.map(w => <div>{w.name}</div>)}
  </div>)
}


const GET_WALLETS = gql`
  query GetWallets {
    wallet {
      id
      name
    }
  }
`

