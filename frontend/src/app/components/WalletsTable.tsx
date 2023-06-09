
export const WalletsTable = () => {
    // const { loading, error, data } = useQuery(GET_WALLETS, { client });
    // console.log('wallets', data)
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className="text-3xl">Crypto Wallets</h1>
            <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-700">
                <thead className="bg-gray-100 dark:bg-gray-700">
                    <tr>
                        <th>Protocols</th>
                        <th>Name</th>
                        <th>Browser Extension</th>
                        <th>Mobile app</th>
                        <th>Desktop app</th>
                        <th>Works with ledger</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                    <tr>
                        <td>Metamask</td>
                        <td>Metamask</td>
                        <td>asdasd</td>
                        <td>asdasd</td>
                        <td>asdasd</td>
                        <td>asdasd</td>
                    </tr>
                </tbody>
            </table>
            a
            asdasd
            <div>as</div>
        </main>)
}


const GET_WALLETS = gql`
query GetWallets {
  wallet {
    id
    name
  }
}
`