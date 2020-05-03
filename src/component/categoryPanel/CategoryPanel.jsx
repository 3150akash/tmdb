import React from "react"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "./categorypanel.module.css"
// import { Spinner } from "reactstrap"
import Grid from '@material-ui/core/Grid';
import MovieCard from "../utilityComponent/movieCard/MovieCard"
const CategoryPanel = ({ data }) => {
    return (
        (data && data.length > 0)
            ? data.map(currentItem => {
                return <MovieCard key={currentItem.id} size="large" currentItem={currentItem} />
            })
            : <Backdrop className={styles.backdrop} open={true}>
                <CircularProgress color="inherit" />
            </Backdrop>
    )
}

export default CategoryPanel