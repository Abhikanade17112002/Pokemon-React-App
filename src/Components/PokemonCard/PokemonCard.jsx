import React from 'react'

const PokemonCard = ({ pokemon}) => {

    

    return (
       


             <div className='py-2 px-1 my-1 mx-1 pokemon-card bg-white rounded-md'>


                    <div className="card-image w-[85%]  mx-auto bg-gray-500 h-[35vh] ">
                        <img src="" alt={`${pokemon?.id}`} className="" />
                    </div>
                    <div className="card-info text-center mt-2">
                        <div className="name">
                            <h1 className='text-2xl font-bold text-black text-transform: capitalize'> {pokemon?.name} </h1>
                        </div>
                        <div className="types flex bg-green-600 justify-center text-white font-bold w-[80%] mx-auto rounded-xl text-transform: capitalize">
                            {pokemon?.types?.map(t => t.type.name).join(" , ")}
                        </div>

                        <div className="stats grid grid-cols-3 w-full gap-1 py-3 px-1">
                            <div className=' flex flex-col'>   <div className="text-xl font-bold ">{pokemon?.height}</div>  <div className="text-sm font-semibold  ">Height </div> </div>
                            <div className=' flex flex-col'   >    <div className="text-xl font-bold ">{pokemon?.weight}</div>  <div className="text-sm font-semibold">Weight</div>        </div>
                            <div className=' flex flex-col'>  <div className="text-xl font-bold ">{pokemon?.stats[5]?.base_stat}</div> <div className="text-sm font-semibold">Speed</div> </div>
                            <div className=' flex flex-col' ><div className="text-xl font-bold ">{pokemon?.base_experience}</div> <div className="text-sm font-semibold">Experience</div></div>
                            <div className=' flex flex-col' ><div className="text-xl font-bold ">{pokemon?.stats[1]?.base_stat}</div> <div className="text-sm font-semibold">Attack</div></div>
                            <div className=' flex flex-col'><div className="text-sm font-bold  text-transform: capitalize">{pokemon?.abilities[0].ability?.name}</div> <div className=" text-sm font-semibold">Abilities</div></div>
                        </div>
                    </div>



                </div>
           

       
    )
}

export default PokemonCard