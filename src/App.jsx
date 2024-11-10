import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import Name from "./components/Name.jsx";
import Price from "./components/Price.jsx";
import Description from "./components/Description";
import Image from "./components/Image.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const firstName = "Djacer";

function App() {
  return (
    <Container className="py-5" fluid>
      <Row className="justify-content-center">
        <Col md={11} lg={10}>
          <Card className="shadow-lg">
            <Card.Body className="p-4">
              <Row>
                <Col md={7}>
                  <Image />
                </Col>
                <Col
                  md={5}
                  className="d-flex flex-column justify-content-center px-4"
                >
                  <Name />
                  <Price />
                  <Description />
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <div className="text-center mt-4">
            <h3>{firstName ? `Hello, ${firstName}!` : "Hello, there!"}</h3>
            {firstName && (
              <img
                src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.1vTmqA1GixJmqkGuMzNSJAHaEK%26pid%3DApi&f=1&ipt=d2cb178b88c28a5baadea93fee8516c28cf9441b29eb0c95b8c7c8bae3443749&ipo=images"
                alt="Welcome"
                className="mt-3 rounded-circle shadow"
                style={{ width: "150px", height: "150px", objectFit: "cover" }}
              />
            )}
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
