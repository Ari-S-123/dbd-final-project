import React from 'react';
import styles from './App.module.css';
import {Nav, Navbar} from "react-bootstrap";
import "reflect-metadata";

function App() {
  return (
      <Navbar className={styles.NavBar} bg="dark" variant="dark">
        <Navbar.Brand>
          <img
              alt=""
              src="https://i.ibb.co/kJX8j8R/formula-1-logo-resized.png"
              width="50"
              height="20"
              className="d-inline-block align-top"
          />{' '}
          Database Design Final Project
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#users">Users</Nav.Link>
          <Nav.Link href="#teams">Teams</Nav.Link>
          <Nav.Link href="#drivers">Drivers</Nav.Link>
          <Nav.Link href="#constructors">Constructors</Nav.Link>
        </Nav>
      </Navbar>
  );
}

export default App;
