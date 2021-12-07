import React from 'react';
import styles from './App.module.css';
import {Nav, Navbar} from "react-bootstrap";
import "reflect-metadata";
import {QueryClient, QueryClientProvider} from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
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
                Database Design Final Project
              </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="http://localhost:4000/findAllUsers">User List</Nav.Link>
                <Nav.Link href="http://localhost:4000/findAllTeams">Team List</Nav.Link>
                <Nav.Link href="http://localhost:4000/findAllDrivers">Driver List</Nav.Link>
                <Nav.Link href="http://localhost:4000/findAllConstructors">Constructor List</Nav.Link>
              </Nav>
            </Navbar>
          </div>
          {/*<div>*/}
          {/*  <UserList/>*/}

          {/*</div>*/}
        </>
      </QueryClientProvider>
  );
}

export default App;
