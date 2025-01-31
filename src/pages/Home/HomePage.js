import React from 'react'
import {Hero} from "./components/Hero"
import { FeaturedProducts } from './components/FeaturedProducts'
import { Testimonials } from './components/Testimonials'
import { Faq } from './components/FAQ'
import { useTitle } from '../../hooks/useTitle'

export const HomePage = () => {
  useTitle("Access Computer Science eBooks");
  
  return (
    <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
       
    </main>
  )
}
