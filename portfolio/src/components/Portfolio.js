import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import project1 from "../images/html-css-javascript-lg.jpg";
import project2 from "../images/html-css-javascript.jpg";
import project3 from "../images/javascript-fullstack.jpg";
import project4 from "../images/mern-stack.jpg";
import project5 from "../images/react-redux.jpg";
import project6 from "../images/react.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#233",
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "Blockchain.com",
    description: `This is a fully responsive clone of the Blockchain.com website.`,
    image: project1,
    link: "https://lloydrivers.github.io/rite-of-passage/50%20Projects-in-50-days/Day-19/index.html",
  },
  {
    name: "Crypto.com",
    description: `This is a fully responsive clone of the Crypto.com website.`,
    image: project2,
    link: "https://lloydrivers.github.io/rite-of-passage/50%20Projects-in-50-days/Day-16/index.html",
  },
  {
    name: "OnChain Movies",
    description: `This is a fully responsive move App project using the MovieDB API.`,
    image: project1,
    link: "https://lloydrivers.github.io/rite-of-passage/50%20Projects-in-50-days/Day-20/index.html",
  },
  {
    name: "Medicare",
    description: `This is a fully responsive React project.`,
    image: project1,
    link: "https://rite-of-passage.vercel.app/",
  },
  {
    name: "Bohemian Mama",
    description: `This is a fully responsive e-commerce store`,
    image: project2,
    link: "https://lloydrivers.github.io/rite-of-passage/50%20Projects-in-50-days/Day-12/index.html",
  },
  {
    name: "Shopstyle",
    description: `This is a fully responsive e-commerce store`,
    image: project1,
    link: "https://lloydrivers.github.io/rite-of-passage/50%20Projects-in-50-days/Day-11/index.html",
  },
];

const Portfolio = () => {
  const classes = useStyles();
  return (
    <Box component="div" className={classes.mainContainer}>
      <Grid container justify="center">
        {/* Projects */}
        {projects.map((project, i) => (
          <Grid item xs={12} sm={8} md={4} key={i}>
            <Card className={classes.cardContainer}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt="Project 1"
                  height="140"
                  image={project.image}
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {project.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
                  Share
                </Button> */}
                <Button size="small" color="primary">
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#223333",
                      fontWeight: "bold",
                    }}
                    to={{ pathname: project.link }}
                    target="_blank"
                  >
                    Live Demo
                  </Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Portfolio;
