import React from 'react';
import styles from './App.module.css';
import {Container, Navbar} from "react-bootstrap";

function App() {
  return (
      <Navbar className={styles.App} bg="dark" variant="dark">
        <Container className={styles.LogoContainer}>
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
        </Container>
      </Navbar>
  );
}

export default App;
