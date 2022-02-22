import { Container } from "./containers/Container";
import { InnerContainer } from "./containers/InnerContainer";
import Header from "./Header";
import Grid from "./containers/Grid";
import HeroContainer from "./containers/HeroContainer";
import Card from "./Card";
import { Nav } from "./Nav";
import "./App.css";
import { useState } from "react";

function App() {
  const [price, setPrice] = useState(0);

  const handlePriceIncrease = (price) => {
    setPrice((prev) => (prev += price));
  };
  const handlePriceDecrease = (item) => {
    if (price === 0) return;

    setPrice((prev) => (prev -= item));
  };
  return (
    <div className="App">
      <Container>
        <InnerContainer>
          <Header>
            <Nav price={price} />
          </Header>
          <HeroContainer>
            <Grid>
              <Card
                image="https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                price={300}
                title="Nike Air Max"
                handlePriceIncrease={handlePriceIncrease}
                handlePriceDecrease={handlePriceDecrease}
              />
              <Card
                image="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dHJhaW5lcnN8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60"
                price={150}
                title="Nike Air Runner"
                handlePriceIncrease={handlePriceIncrease}
                handlePriceDecrease={handlePriceDecrease}
              />
              <Card
                image="https://images.unsplash.com/photo-1516478177764-9fe5bd7e9717?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHRyYWluZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                price={400}
                title="Nike Air Runner"
                handlePriceIncrease={handlePriceIncrease}
                handlePriceDecrease={handlePriceDecrease}
              />
              <Card
                image="https://images.unsplash.com/photo-1512327536842-5aa37d1ba3e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRyYWluZXJzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
                price={500}
                title="Nike Air Runner"
                handlePriceIncrease={handlePriceIncrease}
                handlePriceDecrease={handlePriceDecrease}
              />
            </Grid>
          </HeroContainer>
        </InnerContainer>
      </Container>
    </div>
  );
}

export default App;
