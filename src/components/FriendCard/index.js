import React from "react";
import "./style.css";

// function q(e) {
//   this.props.removeFriend({props.id});    //ES5
// }
function FriendCard(props) {
  return (
    <div
      className="card"
      onClick={() => {
        props.handleremove(props.id);
        props.counting(props.id);
        // props.clicked(props.id);
      }}
    >
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      {/* <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
          <li>
            <strong>Address:</strong> {props.location}
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default FriendCard;
