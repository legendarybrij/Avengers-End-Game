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

// function checkImageClick(id, array) {
//   for (var i = 0; i < array.length; i++) {
//     if (array[i].id === id) {
//       this.clickedAlready[i]===(array[i].name + "=true");
//     }
//   }
// }
var names = [];
function grabNames(array) {
  for (var i = 0; i < array.length; i++) {
    names.push(array[i].name);
  }
}
grabNames(friends);
class App extends React.Component {
  state = {
    random,
    score: 0,
    highscore: 0,
    clickedAlready: names
  };

  updateImageClick(id, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        names[i] = array[i].name + "=true";
        //console.log(this.clickedAlready);
      }
    }
    return names;
  }

  changecount = id => {
    let increaseCount = this.state.score + 1;
    this.setState({ score: increaseCount });
    console.log(this.state);
  };

  handleRemoveFriend = id => {
    const checkClicked = this.updateImageClick(id, this.state.random);
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const filterFriends = randomSort(friends);
    // Set this.state.friends equal to the new friends array
    this.setState({ random: filterFriends });
    this.setState({ clickedAlready: checkClicked });

    // console.log(this.state);
  };

  render() {
    const friendsCard = this.state.random.map(item => (
      <FriendCard
        id={item.id}
        key={item.id}
        image={item.image}
        handleremove={this.handleRemoveFriend}
        counting={this.changecount}
        // clicked={this.clickedAlready}
      />
    ));

    return (
      <Wrapper>
        <ul class="nav nav-pills nav-fill col-md-12">
          {/* <img id="thanos" src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/c/c4/Endgame_54.png/revision/latest?cb=20190514011556"/> */}
          <li class="nav-item">
            <h1 className="title">Clicky Game</h1>
            <h4 className="score">Current Score: {this.state.score}</h4>
            <h4 className="highscore">High Score: {this.state.highscore}</h4>
          </li>
        </ul>

        {friendsCard}
      </Wrapper>
    );
  }
}

export default App;
