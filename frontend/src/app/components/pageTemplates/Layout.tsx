// import { useRouter } from 'next/router'
import Head from "next/head"
import type { ReactNode } from "react"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  // const router = useRouter()

  return (
    <div className="max-h-screen flex">
      <Head>
        <title>Title</title>
        <meta content="Title" name="description" />
        <meta content="width=800, initial-scale=0.5" name="viewport" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <div className="flex-grow flex-shrink min-w-0 relative mt-[19px] min-w-[750px]">
        <main className="max-h-full p-10 pt-24 overflow-scroll">
          {children}
        </main>
      </div>
    </div>
  )
}

export default Layout
