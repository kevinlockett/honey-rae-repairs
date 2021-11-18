import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from './customers/CustomerList.js'
import { EmployeeList } from './employees/EmployeeList.js'
import { EmployeeForm } from './employees/EmployeeForm.js'
import { Employee } from './employees/Employee.js'
import { TicketList } from './tickets/TicketList.js'
import { TicketForm } from './tickets/TicketForm.js'
import { Ticket } from './tickets/Ticket.js'

export const ApplicationViews = () => {
    return (
        <>
            <h1>Honey Rae's Repair Shop</h1>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route exact path="/tickets">
                <TicketList />
            </Route>
            <Route exact path="/tickets/:ticketId(\d+)">
                <Ticket />
            </Route>
            <Route path="/tickets/create">
                <TicketForm />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route exact path="/employees/:employeeId(\d+)">
                <Employee />
            </Route>
            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
        </>
    )
}