import { useState } from "react";

export const useLocalStorage = (itemName, initialValue)=> {
    const storage = localStorage.getItem(itemName)
    let tasks;

    if(!storage){
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        tasks = initialValue
    } else {
        tasks = JSON.parse(storage)
    }

    const [item, setItem] = useState(tasks)

    const saveItem = (newItem) => {
        localStorage.setItem(itemName, JSON.stringify(newItem))
        setItem(newItem)
    }

    return [
        item,
        saveItem
    ]
}