import Image from 'next/image'
import { Inter } from 'next/font/google'
import PostPage from '../components/PostPage'
import Layout from '@/components/layout'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <PostPage />
    </Layout>
  )
}
