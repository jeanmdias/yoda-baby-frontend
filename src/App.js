import React, { Component } from "react";

import GlobalStyle from "./styles/global";
import { BoxContent, Content } from "./styles";

import Dropdown from "./components/Dropdown";
import Profile from "./components/Profile";
import PanelActivity from "./components/PanelActivity";

class App extends Component {

  render() {
    return (
      <BoxContent>
        <Content>
        <div class="container">
          <div class="row">
            <div class="col-12 mb-3">
              <Dropdown />
            </div>
            <div class="col-5">
              <div class="list-group">
                <Profile />
                <Profile />
                <Profile />
              </div>
            </div>
            <div class="col-7">
              <PanelActivity />
            </div>
          </div>
        </div>  
        </Content>
        <GlobalStyle />
      </BoxContent>
    );
  }
}

export default App;
