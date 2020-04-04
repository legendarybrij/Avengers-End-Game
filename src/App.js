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
    clicked: [],
    status: "",
    End: "https://media.giphy.com/media/xT0xejJnePNcOWoHOo/giphy.gif"
  };

  getName(id, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return array[i].name;
      }
    }
  }

  // getClicked(name, array) {
  //   for (var i = 0; i < array.length; i++) {
  //     if (array[i].name === name) {
  //       return array[i].clicked;
  //     }
  //   }
  // }

  changecount = () => {};

  clearClickedArray = () => {
    this.setState({ clicked: [] });
  };

  makeClickedArray = id => {
    const name = this.getName(id, this.state.random);
    var clickedName = this.state.clicked;
    clickedName.unshift(name);
    this.setState({ clicked: clickedName });
  };

  sortArray = id => {
    const name = this.getName(id, this.state.random);
    //const name = this.getName(id, this.state.random);
    if (this.state.score === friends.length) {
      this.setState({
        end: "https://i.kym-cdn.com/photos/images/original/001/486/752/445.gif"
      });
      this.setState({
        status:
          "You are the true hero Earth was waiting for!! You have saved our planet and successfully defeated Thanos"
      });
      if (this.state.score > this.state.highscore) {
        this.setState({ highscore: this.state.score });
      }
      this.setState({ score: 0 });
      this.clearClickedArray();
    } else {
      if (this.state.clicked.includes(name)) {
        if (this.state.score > this.state.highscore) {
          this.setState({ highscore: this.state.score });
        }
        this.setState({ score: 0 });
        this.clearClickedArray();
      } else {
        this.setState({ status: "" });
        this.setState({ end: "" });
        let increaseCount = this.state.score + 1;
        this.setState({ score: increaseCount });
        this.makeClickedArray(id);
      }
    }

    // Filter this.state.friends for friends with an id not equal to the id being removed
    const filterFriends = randomSort(this.state.random);
    // Set this.state.friends equal to the new friends array
    this.setState({ random: filterFriends });

    console.log(this.state.clicked);
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
          <li class="nav-item">
            <h1 className="title">Avengers End Game</h1>
            <h4 className="howtoplay">
              Click on Avengers heros to Attack Thanos but don't click on same
              image twice else you will get killed!!
            </h4>
            <h4 className="score">Current Score: {this.state.score}</h4>
            <h4 className="highscore">High Score: {this.state.highscore}</h4>
            <h4 className="gameover">{this.state.status}</h4>
          </li>
        </ul>
        <img id="thanos" src={this.state.end} />
        {friendsCard}
      </Wrapper>
    );
  }
}

export default App;
