import React from "react"
import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import styles from "./categorypanel.module.css"
import MovieCard from "../utilityComponent/movieCard/MovieCard"
const CategoryPanel = ({ data, type }) => {
    return (
        (data && data.length > 0)
            ? data.map(currentItem => {
                return <MovieCard key={currentItem.id} size="3" type={type} currentItem={currentItem} />
            })
            : <Backdrop className={styles.backdrop} open={true}>
                <CircularProgress color="inherit" />
            </Backdrop>
    )
}

export default CategoryPanel