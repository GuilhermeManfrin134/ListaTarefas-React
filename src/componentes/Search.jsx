import React from 'react';
import "./Search.css"
import { BiSearchAlt } from 'react-icons/bi'
import { FaSortAlphaUp } from 'react-icons/fa'

const Search = ({handleOrderClick, search, setSearch}) => {
    
    return (
        <>
            <div className="taskSearch" >
                <div className="iconAlphabetic"
                    onClick={handleOrderClick}
                    value="Ordenar"
                > 
                    <FaSortAlphaUp />
                </div>
                <input className="inputSearch"
                    type="text" 
                    placeholder="Pesquise uma Tarefa"
                    value={search}
                    onChange={(ev) => setSearch(ev.target.value)}
                />
                <div className="iconSearch">
                    <BiSearchAlt />
                </div>
            </div>
        </>
    )
}

export default Search;