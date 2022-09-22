import React from "react";
import '../styles/TodoSearch.css'

const TodoSearch = ({ search, setSearch, loading })=> {

    const onChangeEvent = (event)=> {
        const value = event.target.value
        console.log(value)
        setSearch(value)
    }

    return (
        <input disabled={loading} className={`TodoSearch ${loading && "disabled"}`} placeholder="TodoSearch" onChange={e=> onChangeEvent(e)} value={search}/> 
    )
}

export { TodoSearch }