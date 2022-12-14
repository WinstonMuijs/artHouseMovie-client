import React from 'react';
import ReactDOM from 'react-dom/client';
import Container from 'react-bootstrap/Container';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';

import MainView from './components/mainview/main-view';


// Import statement to indicate that we need to bundle `./index.scss`
import './index.scss';

const store = createStore(moviesApp);

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return(
     <Provider store={store}>
        <Container>
          <MainView />
        </Container>
      </Provider>
    );
  }
}

// Finds the root of your app
const root = ReactDOM.createRoot(document.getElementsByClassName('app-container')[0]);

// Tells React to render your app in the root DOM element
root.render(
  <MyFlixApplication/>
);

// Find the root of our app
// const container = document.getElementsByClassName('app-container')[0];

// Tell React to render our app in the root DOM element
// ReactDOM.render(React.createElement(MyFlixApplication), container);