import React from 'react'
import { OrbitProgress } from 'react-loading-indicators'

const NoResults = () => {
  return (
    <div className='w-full min-h-[50vh] text-transform: capitalise font-bold my-12  flex justify-center items-center text-6xl'>
        
        <h1 className='flex  justify-center gap-10 items-center'>No Results Available ...     <OrbitProgress variant="spokes" dense color="#070907" size="medium" text="" textColor="" /> </h1>
        
        
        </div>
  )
}

export default NoResults