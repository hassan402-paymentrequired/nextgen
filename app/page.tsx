import Local from '@/components/Local'
import Blog from '@/components/ui/Blog'
import Client from '@/components/ui/Client'
import Demo from '@/components/ui/Demo'
import Footer from '@/components/ui/Footer'
import Guard from '@/components/ui/guard'
import Hero from '@/components/ui/Hero'
import Navbar from '@/components/ui/Navbar'
import Tesla from '@/components/ui/Tesla'
import React from 'react'

const Home = () => {
  return (
    <div className='w-full'>
      <Navbar />
      <Hero />
      <Client />
      <Local />
      <Guard />
      <Tesla />
      <Blog />
      <Demo />
      <Footer />
    </div>
  )
}

export default Home