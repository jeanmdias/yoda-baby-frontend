import React, { Component } from "react";
import axios from "axios";

export default class Dropdown extends Component {

  state = {
    groups: []
  }

  componentDidMount = () => {
    this.getGroups();
  }

  getGroups = () => {
    axios.get("https://yoda-baby-backend.herokuapp.com/groups")
      .then((response) => {
        const data = response.data;
        this.setState({groups:data});
      })
  }

  displayGroups = (groups) => {
    if(!groups.length) return null;
    return groups.map((group,index) => (
      <li key={index}>
        <a class="dropdown-item" href="#">{group.name}</a>
      </li>
    ))
  }

  render() {
    return (
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          May the <s>force</s> <b>community</b> be with you
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          {this.displayGroups(this.state.groups)}
        </ul>
      </div>
    );
  }
}
