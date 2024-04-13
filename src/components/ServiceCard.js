import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { makeStyles } from "@material-ui/core";
import { cardData } from '../Data';



const useStyles = makeStyles((theme) => ({
    cardWrapper:{
       paddingBottom: "100px",
       display: 'flex',
       justifyContent: 'center',
       alignItems:'center',
       flexWrap:'wrap'
       
    },
    card: {
     marginLeft: "10px",
     marginTop: '10px',
     borderRadius:'20px !important',
     cursor:'pointer',
     border: "5px",
     borderColor: '#EEBC1D'
      
    },
    cardAction: {
        backgroundColor: "#33302e !important",
        display: "flex !important",
        height: "300px",
        width: "350px !important"
        
      },
    content: {
      width: "70% !important",
      color: "white !important"
    },
    media: {
      width: "100px !important",
      height: "100px"
    }
  
  }));


const ServiceCard = () => {
    const classes = useStyles();
  return (
    <div className={classes.cardWrapper} >
        {
            cardData.map((item, index) => 
                (
                <Card className={classes.card} key={index} sx={{ maxWidth: 445 }} 
                
                >
                <CardActionArea className={classes.cardAction}>
                  <CardContent className={classes.content} >
                    <Typography gutterBottom variant="h5" component="div">
                      {item.issueDescription}
                    </Typography>
                    <Typography variant="body2" color="white">
                      {item.instruction}
                    </Typography>
                  </CardContent>
          
                  <CardMedia
                  className={classes.media}
               
                    component="img"
                    height="140"
                    image={item.issueIcon}
                    alt="green iguana"
                  />
                </CardActionArea>
              </Card>
                )
            )
           
        }
    
    </div>
  )
}

export default ServiceCard