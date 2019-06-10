import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {

  state = {
    friends
  };

  handleRemoveFriend = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const filterFriends = this.state.friends.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends: filterFriends });
  };

  render () { 
    const friendsCard =this.state.friends.map(item => 
      <FriendCard
      id={item.id}
      key={item.id}
      name={item.name}
      image={item.image}
      occupation={item.occupation}
      location={item.location}
      handleremove={this.handleRemoveFriend}
      />
    );
  
  
  return (

    <Wrapper>
      <h1 className="title">Friends List</h1>

        {friendsCard}

    </Wrapper>
  );

  }

}
    

  




export default App;
