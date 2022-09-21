import { useEffect, useState } from "react";

export const useLocalStorage = (itemName, initialValue)=> {
    const [item, setItem] = useState(initialValue)
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState(false)

    useEffect(()=> {
        setTimeout(()=> {
            try {
                const storage = localStorage.getItem(itemName)
                let tasks;
                
                if(!storage){
                    localStorage.setItem(itemName, JSON.stringify(initialValue))
                    tasks = initialValue
                } else {
                    tasks = JSON.parse(storage)
                }
                
                setLoading(false)
                setError(false)
                setItem(tasks)
            } catch(error){
                setLoading(false)
                setError(true)
            }
        }, 2000)
    }, [])

    
    const saveItem = (newItem) => {
        try {
            localStorage.setItem(itemName, JSON.stringify(newItem))
            setItem(newItem)
        } catch (err) {
            setError(true)
        }
    }

    return {
        item,
        saveItem,
        loading,
        error
    }
}