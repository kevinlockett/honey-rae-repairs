import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
            fetch("https://honey-rae-api-8lpdi.ondigitalocean.app/customers")
                .then(res => res.json())
                .then((data) => {
                    setCustomers(data)
                })
        },
        []
    )

    useEffect(
        () => {

        },
        [customers]
    )

    return (
        <>
            {
                customers.map(
                    (customerObject) => {
                        return <p key={`customer--${customerObject.id}`}>
                            {customerObject.name}
                        </p>
                    }
                )
            }
        </>
    )
}