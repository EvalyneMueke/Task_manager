import React, { useEffect, useState } from 'react'

function SearchBar({onSearch}) {
    const [search, setSearch] = useState('');
      
        function handleSubmit(e) {
          e.preventDefault();
          onSearch(search);
        }
      
        const resetInputField = () => {
          setSearch("");
        };
      
        return (
          <form className='searchbar' onSubmit={handleSubmit}>
            <input
              type="text"
              id="search"
              placeholder="Search Task..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <br/>
            <button className='btn' id='enter' type="submit">Search</button>
            <button className='btn' id='reset' onClick={resetInputField}>Reset</button>
          </form>
        );
      }
    
      

export default SearchBar