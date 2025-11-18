import React, { useEffect, useState } from 'react'
import Loading from '../Loading/Loading';
import PokemonCard from '../PokemonCard/PokemonCard';
import NoResults from '../NoResults/NoResults';

const PokemonCardsContainer = ({ pokemons, setPokemons, searchKey }) => {


    const [loadingState, setLoadingState] = useState(true);
    const APIURL = `https://pokeapi.co/api/v2/pokemon?limit=25`;




    
    const handleFilterSearch = (key, array) => {
        const response  = array.filter((pokemon) =>
            pokemon?.name?.toLowerCase().includes(key.toLowerCase())
        );

        return response ;
        

    }


    const handleFetchData = async () => {

        try {

            const response = await fetch(APIURL);

            const data = await response.json();


            if (data) {

                const detailedResponse = data.results.map(async (result) => {
                    const response = await fetch(result.url);

                    const data = await response.json();

                    return data
                }
                )


                setPokemons(await Promise.all(detailedResponse));
                setLoadingState(false);
            }
            else {
                console.log("Some Thing Is Wrong " + data);

            }
        }
        catch (error) {
            console.log("Error While Fetching Data :", error);
        }
    }


    useEffect(() => {

        handleFetchData();

    }, []);


    return (

        <div className="w-full">
            {
                loadingState ? < Loading /> :  
                
                
                <div className={`w-[80%] mx-auto my-4 gap-2 py-6 px-2  ${ handleFilterSearch(searchKey,pokemons).length == 0 ? "" :  "grid grid-cols-4" }`}>
                    {
                       handleFilterSearch(searchKey,pokemons).length == 0 ? < NoResults /> : handleFilterSearch(searchKey,pokemons)?.map((pokemon)=> <PokemonCard  key={pokemon.id} pokemon={pokemon}  />)
                    }
                    
               </div>   
                
                
                
            }
        </div>
    )


}

export default PokemonCardsContainer