import React from 'react';
import "./Search.css"
import { BiSearchAlt } from 'react-icons/bi'

const Search = ({search, setSearch}) => {
    
    return (
        <>
            <div className="taskSearch" >
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