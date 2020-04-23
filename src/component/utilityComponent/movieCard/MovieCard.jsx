import React from "react"
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Spinner
} from 'reactstrap';
const Moviecard = ({ currentItem, size }) => {
    const cardTitle = currentItem.title ? currentItem.title : currentItem.name;
    return (
        <Card key={currentItem.id} className={(size === "large") ? "col-3 p-0 border " : "col-2 p-0 border "} style={{ borderRadius: ".8rem" }}>
            <CardImg style={{ borderRadius: ".8rem" }} className="border" top width="100%" src={`https://image.tmdb.org/t/p/w220_and_h330_face${currentItem.poster_path ? currentItem.poster_path : currentItem.profile_path}`} alt="Card image cap" />
            <CardBody className="pb-0">
                <CardTitle title={cardTitle}><h4>{cardTitle.length > 15 ? cardTitle.substring(0, 15) + "..." : cardTitle}</h4></CardTitle>
                {
                    currentItem.title
                        ? <CardSubtitle><h5 style={{ color: "gray" }}>{currentItem.release_date ? currentItem.release_date : currentItem.first_air_date}</h5></CardSubtitle>
                        : null
                }
            </CardBody>
        </Card>
    )
}
export default Moviecard