import { useState, useEffect } from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"
import './Tickets.css'

export const TicketList = () => {
    const [tickets, updateTickets] = useState([])
    const [active, setActive] =useState('')
    const history = useHistory()

    useEffect(
        () => {
            fetch("http://localhost:8088/serviceTickets?_expand=employee&_expand=customer")
            .then(res => res.json())
            .then((data) => {
                updateTickets(data)
            })
        },
        []
    )

    useEffect(() => {
        const activeTicketCount = tickets.filter(t => t.dateCompleted === '').length
        setActive(`There are ${activeTicketCount} open tickets`)
    }, [tickets])

    return (
        <>
            <div>
                <button onClick={() => history.push("/tickets/create")}>Create Ticket</button>
            </div>
            { active }
            {
                tickets.map(
                    (ticket) => {
                        return <div key={`ticket--${ticket.id}`}>
                            <p className={`ticket ${ticket.emergency ? 'emergency' : ''}`}>
                                {ticket.emergency ? "🚑" : ""} <Link to={`/tickets/${ticket.id}`}>{ticket.description}</Link> Submitted by {ticket.customer.name} and serviced by {ticket.employee.name}
                            </p>
                        </div>
                    }
                )
            }
        </>
    )
}