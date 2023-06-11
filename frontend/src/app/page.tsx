'use client'
import { QueryClientProvider, QueryClient } from "react-query"
import { Wallets } from '@/components/organisms/Wallets'

const queryClient = new QueryClient()

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Wallets />
    </QueryClientProvider>
  )
}