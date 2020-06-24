import React from 'react';
import {Link} from "react-router-dom";
import {addLike} from '../api/TouitAPI';

class Touit extends React.Component {
    like = () => {
        const {idtouit, updateTouits} = this.props;
        addLike(idtouit, updateTouits);
    }

    render() {
        const {idtouit, pseudo, message, nbLikes, nbComments} = this.props;

        return (
            <li>
                <strong>{pseudo}</strong>
                <p>{message}</p>
                <ul className="touitDetails">
                    <li>
                        <p>{nbLikes} {nbLikes > 1 ? "likes" : "like"}</p>
                        <button className="btn" onClick={this.like}>J'aime !</button>
                    </li>
                    <li>
                        <p>{nbComments} {nbComments > 1 ? "comments" : "comment"}</p>
                        <button className="btn">Je donne mon avis !</button>
                    </li>
                </ul>
                {/* il serait préférable d'utiliser le point d'API permettant de récupérer un seul touit afin d'être sûr d'avoir le nombre de likes et de comments à jour */}
                <Link className="btn" to={{
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