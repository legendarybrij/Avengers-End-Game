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

class App extends React.Component {
  state = {
    random: friends,
    score: 0,
    highscore: 0,
    clicked: "false"
  };

  updateImageClick(id, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        array[i].clicked = "true";
      }
    }
    return array;
  }

  getName(id, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return array[i].name;
      }
    }
  }

  getClicked(name, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].name === name) {
        return array[i].clicked;
      }
    }
  }

  changecount = event => {
    console.log(event);
    let increaseCount = this.state.score + 1;
    this.setState({ score: increaseCount });
  };

  sortArray = id => {
    this.setState({ clicked: "false" });
    const name = this.getName(id, this.state.random);
    const isClicked = this.getClicked(name, this.state.random);
    this.setState({ clicked: isClicked });
    this.updateImageClick(id, this.state.random);
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const filterFriends = randomSort(this.state.random);
    // Set this.state.friends equal to the new friends array
    this.setState({ random: filterFriends });

    console.log(this.state);
  };

  render() {
    const friendsCard = this.state.random.map(item => (
      <FriendCard
        id={item.id}
        key={item.id}
        image={item.image}
        sortarray={this.sortArray}
        counting={this.changecount}
      />
    ));

    return (
      <Wrapper>
        <ul class="nav nav-pills nav-fill col-md-12">
          {/* <img id="thanos" src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/c/c4/Endgame_54.png/revision/latest?cb=20190514011556"/> */}
          <li class="nav-item">
            <h1 className="title">Avengers End Game</h1>
            <h4 className="howtoplay">
              Click on images to Attack Thanos but don't click on same image
              twice else you will get killed
            </h4>
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
