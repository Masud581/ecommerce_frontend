import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Products from './Products'
import Collections from './Collections'

function Home() {
  return (
    <div>
        <Banner />
        <Category/>
        <Products />
        <Collections/>
    </div>
  )
}

export default Home