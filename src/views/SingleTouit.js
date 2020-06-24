import React from 'react';
import {Link} from "react-router-dom";

class SingleTouit extends React.Component {
    render() {
        const {pseudo, message, nbLikes, nbComments} = this.props.location.state;

        return (
            <div className="single-touit">
                <strong>{pseudo}</strong>
                <p>{message}</p>
                <ul className="touitDetails">
                    <li>{nbLikes} {nbLikes > 1 ? "likes" : "like"}</li>
                    <li>{nbComments} {nbComments > 1 ? "comments" : "comment"}</li>
                </ul>
                <Link to="/" >Retour</Link>
            </div>
        )
    }
}

export default SingleTouit;