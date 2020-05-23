import React from "react"
import { makeStyles, CircularProgress } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";
import { useEffect } from "react";
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


const setBackground = (backgroundURL, ref) => {
    //  alert(ref.current)
    ref.current.style.backgroundImage = "url(" + `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${backgroundURL}` + ")"
}

const Moviecard = ({ currentItem, type, size, parent }) => {
    const cardTitle = currentItem.title ? currentItem.title : currentItem.name;
    const classes = useStyles();
    useEffect(() => {
        setBackground(currentItem.backdrop_path, parent)
    }, [])
    return (
        <div onMouseOver={() => setBackground(currentItem.backdrop_path, parent)} style={{ borderRadius: ".8rem" }} className={`col-${size} p-0 border `}>
            <Link to={`/${type}/${currentItem.id}`}>
                < CardActionArea style={{ background: "white", borderRadius: ".8rem" }} >
                    <CardMedia
                        className={classes.media}
                        image={`https://image.tmdb.org/t/p/w220_and_h330_face${currentItem.poster_path ? currentItem.poster_path : currentItem.profile_path}`}
                        title={cardTitle}
                    />
                    {type.toLowerCase() !== "person" && <CircularProgress
                        color={currentItem.vote_average > 5 ? "primary" : "secondary"}
                        style={{ position: "absolute", top: "275px", left: "10px", backgroundColor: "black", borderRadius: "50%" }}
                        variant="static"
                        value={Math.trunc(currentItem.vote_average * 10)}
                    />}
                    <label style={{ position: "absolute", top: "286px", color: "white", left: "20px", fontSize: "small" }}>
                        {Math.trunc(currentItem.vote_average * 10)}
                        <sup>%</sup>
                    </label>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="h6" style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1 }}>
                            {cardTitle.length > 20 ? cardTitle.substring(0, 20) + "..." : cardTitle}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            {new Date(currentItem.release_date ? currentItem.release_date : currentItem.first_air_date).toDateString().slice(4)}
                        </Typography>
                    </CardContent>
                </CardActionArea >
            </Link>
        </div >
    )
}
export default React.memo(Moviecard)