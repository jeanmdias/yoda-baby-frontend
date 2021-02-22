import React, { Component } from "react";

export default class PanelActivity extends Component {

  render() {
    return (
      <div class="card">
        <div class="card-body">
            <h5 class="mb-3">Contribution activity</h5>
            <div id="contribution_chart"></div>
        </div>
      </div>
    );
  }
}
