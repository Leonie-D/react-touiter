import React from 'react';
import {Link} from "react-router-dom";

class Touit extends React.Component {
    render() {
        const {pseudo, message, nbLikes, nbComments} = this.props;

        return (
            <li>
                <strong>{pseudo}</strong>
                <p>{message}</p>
                <ul className="touitDetails">
                    <li>{nbLikes} {nbLikes > 1 ? "likes" : "like"}</li>
                    <li>{nbComments} {nbComments > 1 ? "comments" : "comment"}</li>
                </ul>
                <Link to={{
                    pathname: "/touit",
                    state: {
                        "pseudo" : pseudo,
                        "message" : message,
                        "nbLikes" : nbLikes,
                        "nbComments" : nbComments
                    }
                }}>Voir ce touit</Link>
            </li>
        )
    }
}

export default Touit;