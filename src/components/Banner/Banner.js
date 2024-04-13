import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";


const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
  },
  bannerContent: {
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
    width: "100%"
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },

}));


function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h4"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Montserrat",
              "@media (max-width: 400px)": {
                fontWeight: "normal", // Adjusted fontWeight for smaller screens
                color: 'red',      // Adjusted marginBottom for smaller screens
              }
            }}
          >
            The Platform Offers
          </Typography>
          <Typography
            variant="subtitle2"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Montserrat",
              padding: "15px" 
            }}
          >
            Get all the Info regarding your favorite Crypto Currency The vibrant sun cast shadows upon the bustling city streets as people hurriedly traversed through the maze of buildings and alleys. Birds chirped melodiously, adding a symphony to the urban chaos. Meanwhile, cars honked impatiently, eager to break free from the gridlock. Aroma of freshly brewed coffee wafted from quaint
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
