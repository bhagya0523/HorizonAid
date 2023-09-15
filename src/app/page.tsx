import Feature from '@/components/Feature'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import Survey from '@/components/Survey'
import Footer from '@/components/Footer'


import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <Services />
      <Survey />
      <Footer />
     

    </main>
    
  )
}
