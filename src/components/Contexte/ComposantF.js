import React from 'react'
import { UserConsumer } from './UserContext'

function ComposantF() {
  return (
    <UserConsumer>
        {
            username=>{
                return <div>Good Morning Vietnam and {username}</div>
            }
        }
    </UserConsumer>
  )
}

export default ComposantF