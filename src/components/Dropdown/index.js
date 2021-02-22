import React, { Component } from "react";

export default class Dropdown extends Component {

  render() {
    return (
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          May the <s>force</s> <b>community</b> be with you
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="https://yoda.baby">Backend</a></li>
          <li><a class="dropdown-item" href="https://yoda.baby">Frontend</a></li>
          <li><a class="dropdown-item" href="https://yoda.baby">Linux</a></li>
        </ul>
      </div>
    );
  }
}
