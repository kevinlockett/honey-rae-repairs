import React, { useState, useEffect } from "react"

export const TicketList = () => {
    const [tickets, setTickets] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
            .then(res => res.json())
            .then((data) => {
                setTickets(data)
            })
        },
        []
    )

    return (
        <>
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <p>
                                {ticket.description} Submitted by {ticket.customer.name}
                                and serviced by {ticket.employee.name}
                            </p>
                        </div>
                    }
                )

            }
        </>
    )
}