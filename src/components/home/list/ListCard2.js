import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './ListCards.css';

const useStyles = makeStyles({
    root: {
      maxWidth: 345,
    },
  });
  
  export default function ListCard() {
    const classes = useStyles();
  
    return (
      <Card className={classes.root}>
      <div className={classes.details}>
        <CardActionArea>
          <CardContent className={classes.content}>
            <CardMedia
              component="img"
              alt="Real Estate Pic"
              height="140"
              image="./heshewe.png"
              title="Real Estate Pic"
            />
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
              across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
      </div>
      </Card>
    );
  }