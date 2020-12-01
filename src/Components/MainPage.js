import React from "react";
import { Route, Link } from "react-router-dom";
import MainMain from "./MainMain";
import MainSidebar from "./MainSidebar";
import "./Noteful.css";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <Link to="/">
            <h1>Noteful</h1>
          </Link>
        </header>

        <div className="Group">
          <Route
            exact
            path="/"
            render={(props) => (
              <MainSidebar {...props} state={this.props.state} />
            )}
          />

          <Route
            exact
            path="/"
            render={(props) => <MainMain {...props} state={this.props.state} />}
          />


        </div>
      </div>
    );
  }
}
