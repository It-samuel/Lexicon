import React from 'react'
import {Hero} from "./components/Hero"
import { FeaturedProducts } from './components/FeaturedProducts'
import { ProductCard } from '../../components/Elements/ProductCard'

export const HomePage = () => {
  return (
    <main>
        <Hero />
        <FeaturedProducts />
       
    </main>
  )
}
