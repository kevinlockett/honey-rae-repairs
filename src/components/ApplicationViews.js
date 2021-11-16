import React from "react"
import { Route } from "react-router-dom"
import { CustomerList } from './customers/CustomerList.js'
import { EmployeeList } from './employees/EmployeeList.js'
import { TicketList } from "./tickets/TicketList.js'

export const ApplicationViews = () => {
    return (
        <>
            <Route path="/customers">
                <CustomerList />
            </Route>
            <Route path="/employees">
                <EmployeeList />
            </Route>
            <Route path="/tickets">
                <TicketList />
            </Route>
        </>
    )
}