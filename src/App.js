import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

function randomSort(array) {
  for (var i = 0; i < array.length; i++) {
    const n = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[n];
    array[n] = temp;
  }
  return array;
}
var random = randomSort(friends);
//var score = 0;
// function count(number) {
//   number++;
//   //console.log(score);
//   return number;
// }
class App extends React.Component {
  state = {
    random,
    score: 0
  };

  changecount = id => {
    let increaseCount = this.state.score + 1;
    this.setState({ score: increaseCount });
    console.log(this.state);
  };
  handleRemoveFriend = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const filterFriends = randomSort(friends);
    // Set this.state.friends equal to the new friends array
    this.setState({ random: filterFriends });
  };

  render() {
    const friendsCard = this.state.random.map(item => (
      <FriendCard
        id={item.id}
        key={item.id}
        name={item.name}
        image={item.image}
        occupation={item.occupation}
        location={item.location}
        handleremove={this.handleRemoveFriend}
        counting={this.changecount}
        clicked={this.clickedAlready}
      />
    ));

    return (
      <Wrapper>
        <ul class="nav nav-pills nav-fill col-md-12">
          <li class="nav-item">
            <h1 className="title">Clicky Game</h1>
            <h4 className="score">Current Score: {this.state.score}</h4>
          </li>
        </ul>

        {friendsCard}
      </Wrapper>
    );
  }
}
//console.log(score);
export default App;
