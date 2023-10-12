import React from 'react'
import Hero from '../../components/Hero/Hero'
import Popular from '../../components/Popular/Popular'
import Offers from '../../components/Offers/Offers'
import NewCollections from '../../components/NewCollections/NewCollections'

const Main = () => {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
    </div>
  )
}

export default Main
