import { Layout } from '@/components/Layout'
import { Header } from '@/components/header'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title='YouTube'>
      <Header />
    </Layout>
  )
}
