import React, { useState, createContext } from "react"

// The context is imported and used by individual components that need data
export const OwnerContext = createContext()

// This component establishes what data can be used.
export const OwnerProvider = (props) => {
    const [owners, setOwners] = useState([])

    const getOwners = () => {
        return fetch("http://localhost:8088/customers")
        .then(res => res.json())
        .then(setOwners)
    }

    const addOwner = ownerObj => {
        return fetch("http://localhost:8088/customers", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ownerObj)
        })
        .then(getOwners)
    }
    return (
        <OwnerContext.Provider value={{
            owners, getOwners, addOwner
        }}>
            {props.children}
        </OwnerContext.Provider>
    )
}