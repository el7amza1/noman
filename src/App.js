import React from "react";
import logo from "./logo.svg"
import "./App.css"
import NavScrollExample from "./NavBar";
import {Carousel} from "react-bootstrap"


const App = () => {
  return (
    <div className="App">
    <h1> Noemannnn</h1>
      <NavScrollExample />
      <img src={logo} className="App-logo"></img>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={logo}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h1>Change app.jss</h1>
    </div>
  )
}

export default App;