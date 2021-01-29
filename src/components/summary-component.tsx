import React from "react"

export default function SummaryComponent(): React.ReactNode {
    return (
    <div className="summary">
    <h1><i className="fas fa-users"></i>Number of Employees</h1>
    <h1><i className="fas fa-hand-holding-usd"></i>Average Salary</h1>
    </div>)
  }