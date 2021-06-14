import './App.css';
import { Provider } from 'react-redux'
import store from './Redux/Store/store'
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './image2vector.svg';
import FirstStep from './components/FirstStep/firstStep.js';
import SecondStep from './components/SecondStep/secondStep.js';
import ThirdStep from './components/ThirdStep/thirdStep.js';
import React, { useState } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

  export default  function App() {
  

  return (
    <div className="App">
      <Provider store={store}>

      <Router>
                <div>
                    <Navbar bg="light" variant="light" style={{ fontSize: "calc(10px + 2vmin)" }} >
                        <LinkContainer to="/">
                            <Navbar.Brand>react test</Navbar.Brand>
                        </LinkContainer>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <LinkContainer to="/">
                                    <Nav.Link>First Step</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/secondStep">
                                    <Nav.Link>Second Step</Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/thirdStep">
                                    <Nav.Link>Third Step</Nav.Link>
                                </LinkContainer>
                            </Nav>
                        </Navbar.Collapse>
                        <p style={{ fontSize: "18px", color: "coral" }} className="mt-2">  React Project</p>
                        <img src={logo} className="App-logo" alt="logo" />

                    </Navbar>
                    <Switch>
                        
                        <Route path="/secondStep">
                            <header className="App-header">
                                <SecondStep style={{ width: "75vw" }} />
                            </header>
                        </Route>
                        <Route path="/thirdStep">
                            <header className="App-header">
                                <ThirdStep />
                            </header>
                        </Route>
                        <Route path="/">
                            <header className="App-header">
                                <FirstStep />
                            </header>
                        </Route>
                    </Switch>
                </div>
            </Router>

      </Provider>
    </div>
  );
}







