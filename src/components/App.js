import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

import '../styles/App.css';

import ProfileCard from './ProfileCard.js'
import Overview from './Overview.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container fluid={true}>
          <Row>
            <Col md="3">
              <ProfileCard></ProfileCard>
            </Col>
            <Col md="9">
              <Overview></Overview>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
