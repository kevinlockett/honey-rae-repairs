import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from './customers/CustomerList.js'
import { EmployeeList } from './employees/EmployeeList.js'
import { EmployeeForm } from './employees/EmployeeForm.js'
import { TicketList } from './tickets/TicketList.js'
import { TicketForm } from './tickets/TicketForm.js'

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
            <Route path="/tickets/create">
                <TicketForm />
            </Route>
            <Route exact path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/employees/create">
                <EmployeeForm />
            </Route>
        </>
    )
}