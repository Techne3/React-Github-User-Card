import React from 'react';
import './App.css';
import axios from 'axios'
import UserCard from './Components/userCard'






class App extends React.Component {
  constructor(){
    super();
    this.state={
      user: [],
      userFollowers: []
    }
  }
 
  componentDidMount(){
    axios.get("https://api.github.com/users/techne3/followers")
    .then(res => res.data.forEach(user => {
      axios.get(user.url)
    .then(res => this.setState({
        user: [...this.state.user, res.data]
      }))
    }))
    .catch(err => console.log("Error", err))


      axios.get("https://api.github.com/users/techne3")
      .then(res => this.setState({ 
      user: [...this.state.user,  res.data]
  }))
    .catch(err => console.log("Errors", err))
}


 
   render(){
     return (
       <div className="App">
           <UserCard user={this.state.user} />
           {/* <UserFollower userFollowers={this.state.userFollowers}/> */}
       </div>
     );
   }
 }

export default App;
