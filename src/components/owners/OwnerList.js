import React, { useContext, useEffect } from "react"
import { OwnerContext } from "./OwnerProvider"
import "./owner.css"

export const OwnerList = () => {
  // This state changes when `getAnimals()` is invoked below
  const { owners, getOwners } = useContext(OwnerContext)

  //useEffect - reach out to the world for something
  useEffect(() => {
    console.log("OwnerList: useEffect - getOwners")
    getOwners()
  }, [])

  return (
    <section className="owners">
      {
        owners.map(owner => {
          return (
            <div className="owner" id={`owner--${owner.id}`}>
              <div className="owner__name">
                Name: { owner.name }
              </div>
            </div>
          )
        })
      }
    </section>
  )
}