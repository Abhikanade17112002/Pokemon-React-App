import React from 'react'

const SearchBox = ({searchKey , setSearchKey}) => {
  return (
    <div  className='w-full  py-6 '>

          <div className="search-box-container w-[50%] mx-auto flex justify-between">

            <div className="search-input w-[80%] mx-auto">
             <input type="text" className='w-full py-[16px] px-4 search-input-border' placeholder='Anything Related To Youre Favorite Character....'
             value={searchKey}
             onChange={(event)=>setSearchKey(event.target.value)}
            />
            </div>
          </div>


    </div>
  )
}

export default SearchBox