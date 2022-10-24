import React from 'react';
import { Container } from 'react-bootstrap/Container';
import * as ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import moviesApp from './reducers/reducers';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { MainView } from './components/mainview/main-view';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

const store = createStore(moviesApp, devToolsEnhancer());

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
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
  <React.StrictMode>
    <MyFlixApplication/>
  </React.StrictMode>
);