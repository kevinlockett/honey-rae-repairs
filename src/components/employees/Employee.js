import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const Employee = () => {
    const [ employee, selectEmployee ] = useState({})
    const { employeeId } = useParams()

    useEffect(
        () => {
            return fetch(`http://localhost:8088/employees/${employeeId}`)
                .then(res => res.json())
                .then((data) => {
                    selectEmployee(data)
                })
        },
        [ employeeId ]
    )

    return (
        <>
            <section className="employee">
                <h2 className="employee__name">{ employee.name }</h2>
                <h3 className="employee__specialty">Specialty is { employee?.specialty }</h3>
            </section>
        </>
    )
}