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

type Wallet = {
  id: string
  name: string
}

const fetchGraphql = async (query: string): Promise<Wallet[]> => {
  if (!process.env.NEXT_PUBLIC_NHOST_BACKEND_URL) {
    throw new Error('NEXT_PUBLIC_NHOST_BACKEND_URL is not set')
  }
  const data: Wallet[] = await request(process.env.NEXT_PUBLIC_NHOST_BACKEND_URL, query)
  return data
}


const Wallets = () => {
  const { isLoading, error, data } = useQuery('wallets', () => fetchGraphql(GET_WALLETS));

  console.log('data', data)
  return (<div>
    {data?.map((w, id) => <div key={id}>{w.name}</div>)}
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

