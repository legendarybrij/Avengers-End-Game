import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

function randomSort(array)
  { 
    for(var i=0; i<array.length;i++)
    {
      const n = Math.floor(Math.random() * (i+1)); 
      const temp = array[i];
      array[i] = array[n];
      array[n] = temp;

    }
    return array;

  }
var random= randomSort(friends);
console.log(random[0].id,random[1].id,random[2].id)
class App extends React.Component {
  
  state = {
    random
  };

  handleRemoveFriend = (id) => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const filterFriends = randomSort(friends);
    // Set this.state.friends equal to the new friends array
    this.setState({ random: filterFriends });
  };
 
  render () { 
   
    const friendsCard =this.state.random.map(item => 
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
