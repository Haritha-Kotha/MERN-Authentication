import React, { useEffect } from 'react'
import { useContext } from 'react'
import { UserContext } from '../Contexts/userContexts'

function Dashboard() {
    const {user} = useContext(UserContext)

  return (
    <div>
        <h1>Dashboard</h1>
        {!!user && (<h2> Hii {user.name}!</h2>)}
    </div>
  )
}

export default Dashboard