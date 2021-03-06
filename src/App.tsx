import React from 'react';
import styles from './App.module.css';
import {Nav, Navbar} from "react-bootstrap";
import "reflect-metadata";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {UserList} from "./components/user/user-list";
import {TeamList} from "./components/team/team-list";
import {DriverList} from "./components/driver/driver-list";
import {ConstructorList} from "./components/constructor/constructor-list";
import {UserEditor} from "./components/user/user-edit";
import {ConstructorEditor} from "./components/constructor/constructor-edit";
import {DriverEditor} from "./components/driver/driver-edit";
import {TeamEditor} from "./components/team/team-edit";

function App() {
  return (
      <Router>
        <>
          <div>
            <Navbar className={styles.NavBar} bg="dark" variant="dark">
              <Navbar.Brand>
                <img
                    alt=""
                    src="https://i.ibb.co/kJX8j8R/formula-1-logo-resized.png"
                    width="50"
                    height="20"
                    className="d-inline-block align-top"
                />{' '}
                Formula 1 Fantasy Team Manager
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/userList">User List</Nav.Link>
                <Nav.Link href="/teamList">Team List</Nav.Link>
                <Nav.Link href="/driverList">Driver List</Nav.Link>
                <Nav.Link href="/constructorList">Constructor List</Nav.Link>
              </Nav>
            </Navbar>
            <Routes>
              <Route path="/userList" element={<UserList/>}/>
              <Route path="/userEditor/:id" element={<UserEditor/>}/>
              <Route path="/teamList" element={<TeamList/>}/>
              <Route path="/teamEditor/:id" element={<TeamEditor/>}/>
              <Route path="/driverList" element={<DriverList/>}/>
              <Route path="/driverEditor/:id" element={<DriverEditor/>}/>
              <Route path="/constructorList" element={<ConstructorList/>}/>
              <Route path="/constructorEditor/:id" element={<ConstructorEditor/>}/>
            </Routes>

          </div>
        </>
      </Router>
  );
}

export default App;
