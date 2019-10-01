import React from "react"
import UserItem from "./userItem"

class UserCard extends React.Component {

    
    render(){
        return(
            this.props.user.map(user => 
            <UserItem user={user} />)
        )
    }
}

export default UserCard