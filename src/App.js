import React, { Component, Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Message from './containers/Message'
import MessageDetails from './components/MessageDetail';


class App extends Component {
  render() {
    return (
      <Fragment>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Message} />
            <Route exact path="/message/:title" component={MessageDetails}/>
          </Switch>
        </BrowserRouter>
      </Fragment>
    );
  }
}

export default App;
