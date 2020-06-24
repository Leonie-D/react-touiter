import React from 'react';
import {Link} from "react-router-dom";

class Touit extends React.Component {
    render() {
        const {idtouit, pseudo, message, nbLikes, nbComments} = this.props;

        return (
            <li>
                <strong>{pseudo}</strong>
                <p>{message}</p>
                <ul className="touitDetails">
                    <li>{nbLikes} {nbLikes > 1 ? "likes" : "like"}</li>
                    <li>{nbComments} {nbComments > 1 ? "comments" : "comment"}</li>
                </ul>
                {/* il serait préférable d'utiliser le point d'API permettant de récupérer un seul touit afin d'être sûr d'avoir le nombre de likes et de comments à jour */}
                <Link to={{
                    pathname: "/touit",
                    state: {
                        "idtouit" : idtouit,
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