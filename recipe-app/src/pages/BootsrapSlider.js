import React from "react";
import { Carousel } from "react-bootstrap";

function BootsrapSlider() {
  return (
    <Carousel style={{ width: "200px" }} fade>
      <Carousel.Item>
        <img
          style={{ width: "100px" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1649857114280-0df8879c9034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHMlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100px" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1634283715079-d91bbed0ece0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZHVjdHMlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          style={{ width: "100px" }}
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1649857114280-0df8879c9034?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHMlMjBzaG9wfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
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
  );
}

export default BootsrapSlider;
