import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useHistory } from 'react-router-dom'
import "./employee.css"

export const EmployeeList = () => {
    const history = useHistory()
    const { employees, getEmployees } = useContext(EmployeeContext)

    useEffect(() => {
        console.log("EmployeeList: useEffect - getEmployees")
        getEmployees()
    }, [])

    return (
        <>
        <div>
        <button onClick={
                () => history.push("/employees/create")
            }>
                Add Employee
            </button>
        </div>
        <section className="employees">
            {
                employees.map(employee => {
                    return (
                        <div className="employee" id={`employee--${employee.id}`}>
                            <div className="employee__name">
                                Name: {employee.name}
                            </div>
                        </div>
                    )
                })
            }
        </section>
    </>
    )
}