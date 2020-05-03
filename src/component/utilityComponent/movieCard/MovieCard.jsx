import React from "react"
import { makeStyles } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import {
//     Card, CardImg, CardText, CardBody,
//     CardTitle, CardSubtitle, Button, Spinner
// } from 'reactstrap';

const useStyles = makeStyles({
    root: {
        width: "33%",
    },
    media: {
        height: 300,
        borderRadius: ".8rem"
    },
});

const Moviecard = ({ currentItem, size }) => {
    const cardTitle = currentItem.title ? currentItem.title : currentItem.name;
    const classes = useStyles();
    return (
        <div style={{ borderRadius: ".8rem" }} className={(size === "large") ? "col-3 p-0 border " : "col-2 p-0 border "}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`https://image.tmdb.org/t/p/w220_and_h330_face${currentItem.poster_path ? currentItem.poster_path : currentItem.profile_path}`}
                    title={cardTitle}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h6">
                        {cardTitle.length > 10 ? cardTitle.substring(0, 10) + "..." : cardTitle}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {currentItem.release_date ? currentItem.release_date : currentItem.first_air_date}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </div>
    )
}
export default Moviecard