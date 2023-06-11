import { request, gql } from "graphql-request"

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_NHOST_BACKEND_URL || 'https://local.graphql.nhost.run/v1'

type GraphQLResponse = {
    wallet: Wallet[]
}
type Wallet = {
    id: string
    name: string
}
export const fetchGraphql = async (query: string): Promise<Wallet[]> => {
    try {
        const data: GraphQLResponse = await request(GRAPHQL_ENDPOINT, query)
        return data.wallet
    } catch (e) {
        console.log('e', e)
        throw new Error('Error parsing wallet data')
    }
}

export const GET_WALLETS = gql`
    query GetWallets {
    wallet {
        id
        name
    }
    }
`
