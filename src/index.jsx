import React from 'react';
import { Container } from 'react-bootstrap';
import * as ReactDOM from 'react-dom/client';
import { MainView } from './components/mainview/main-view';
import { Container } from 'react-bootstrap';

// Import statement to indicate that you need to bundle `./index.scss`
import './index.scss';

// Main component (will eventually use all the others)
class MyFlixApplication extends React.Component {
  render() {
    return (
      <Container>
        <MainView />
      </Container>
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