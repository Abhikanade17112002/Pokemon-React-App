import React from 'react'
import { OrbitProgress } from 'react-loading-indicators'

const Loading = () => {
  return (
    <div className='w-full min-h-[50vh] text-transform: capitalise font-bold my-12  flex justify-center items-center text-6xl'>
        
        <h1 className='flex  justify-center gap-10 items-center'>Loading     <OrbitProgress variant="disc" dense color="#070907" size="medium" text="" textColor="" />  </h1>
        
        
        </div>
  )
}

export default Loading