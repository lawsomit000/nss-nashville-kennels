import React, { useState, createContext } from "react"
import { Route } from 'react-router-dom';
import { AnimalDetail } from "./AnimalDetail";

// The context is imported and used by individual components that need data
export const AnimalContext = createContext()

// This component establishes what data can be used.
export const AnimalProvider = (props) => {
    const [animals, setAnimals] = useState([])

    const getAnimals = () => {
        return fetch("http://localhost:8088/animals?_expand=customer&_expand=location&_sort=location.id")
            .then(res => res.json())
            .then(setAnimals)
    }

    const addAnimal = animal => {
        return fetch("http://localhost:8088/animals?_expand=customer&_expand=location&_sort=location.id", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        })
            .then(response => response.json())
    }
    const releaseAnimal = animalId => {
        return fetch(`http://localhost:8088/animals/${animalId}`, {
            method: "DELETE"
        })
            .then(getAnimals)
            }     
            
    const updateAnimal = animal => {
                return fetch(`http://localhost:8088/animals/${animal.id}`, {
                  method: "PUT",
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(animal)
                })
                  .then(getAnimals)
              }        

     const getAnimalById = (animalId) => {
                return fetch(`http://localhost:8088/animals/${animalId}`)
                .then(res => res.json())
            }         

    <AnimalProvider>
        <Route exact path="/animals/detail/:animalId(\d+)">
            <AnimalDetail />
        </Route>
    </AnimalProvider>

    /*
        You return a context provider which has the
        `animals` state, `getAnimals` function,
        and the `addAnimal` function as keys. This
        allows any child elements to access them.
    */
    return (
        <AnimalContext.Provider value={{
            animals, getAnimals, addAnimal, releaseAnimal, updateAnimal, getAnimalById
        }}>
            {props.children}
        </AnimalContext.Provider>
    )

}