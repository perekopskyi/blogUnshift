import React, { Component } from 'react';
import ActivePost from './containers/activePost/activePost';
import CreatePost from './containers/createPost/createPost';
import { Route, Switch } from 'react-router-dom';
import MainView from './containers/mainView/mainView';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" exact component={MainView} />
          <Route path="/post" component={ActivePost} />
          <Route path="/create" component={CreatePost} />
        </Switch>
      </div>
    )
  }
}

export default App;