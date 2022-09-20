import React from "react";
import '../styles/TodoSearch.css'

const TodoSearch = ({ search, setSearch })=> {

    const onChangeEvent = (event)=> {
        const value = event.target.value
        console.log(value)
        setSearch(value)
    }

    return (
        <input className="TodoSearch" placeholder="TodoSearch" onChange={e=> onChangeEvent(e)} value={search}/> 
    )
}

export { TodoSearch }