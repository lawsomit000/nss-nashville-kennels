import React from "react"
import { Route } from "react-router-dom"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { OwnerList } from "./owners/OwnerList"
import { OwnerProvider } from "./owners/OwnerProvider"
import { LocationProvider } from "./locations/LocationProvider"
import { LocationList } from "./locations/LocationList"
import { AnimalForm } from "./animal/AnimalForm"
import { EmployeeForm } from "./employees/EmployeeForm"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <LocationProvider>
                <Route exact path="/">
                    <LocationList />
                </Route>
            </LocationProvider>

            {/* Render the animal list when http://localhost:3000/animals */}
            <AnimalProvider>
                <Route exact path="/animals">
                    <AnimalList />
                </Route>

                <LocationProvider>
                    <OwnerProvider>
                        <Route exact path="/animals/create">
                            <AnimalForm />
                        </Route>
                    </OwnerProvider>
                </LocationProvider>
            </AnimalProvider>

            <EmployeeProvider>
                <Route path="/employees">
                    <EmployeeList />
                </Route>

                <LocationProvider>
                    <Route exact path="/employees/create">
                          <EmployeeForm />
                    </Route>
                </LocationProvider>
                
            </EmployeeProvider>

            <OwnerProvider>
                <Route path="/customers">
                    <OwnerList />
                </Route>
            </OwnerProvider>

            <LocationProvider>
                <Route path="/locations">
                    <LocationList />
                </Route>
            </LocationProvider>
        </>
    )
}