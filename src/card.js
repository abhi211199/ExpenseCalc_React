import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { MdShoppingCart } from 'react-icons/md';
import { GiMilkCarton } from 'react-icons/gi'
import { FaMobileAlt } from 'react-icons/fa'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();
  return (
    <Card className={classes.root} id="carde" style={{backgroundColor:"#80ffaa"}}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Expense Name: {props.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Expense Amount: {props.amount}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            Expense Type: {props.type}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2"> 
            Date: {props.date}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
