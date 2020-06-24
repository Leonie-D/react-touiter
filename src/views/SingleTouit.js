import React from 'react';
import CommentContainer from '../components/CommentContainer';
import {Link} from "react-router-dom";
import {getComments} from '../api/TouitAPI';

class SingleTouit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "error" : null,
            "commentIsLoaded" : false,
            "comments" : []
        };
    }
    
    updateComments = (comments) => {
        this.setState({ 
            "comments" : comments,
            "commentIsLoaded" : true
        });
    }
      
    componentDidMount() {
        const {idtouit, nbComments} = this.props.location.state;
        getComments(idtouit, nbComments, this.updateComments);
    }

    render() {
        const {pseudo, message, nbLikes, nbComments} = this.props.location.state;
        const {comments, commentIsLoaded} = this.state;

        return (
            <div className="single-touit">
                <strong>{pseudo}</strong>
                <p>{message}</p>
                <ul className="touitDetails">
                    <li>{nbLikes} {nbLikes > 1 ? "likes" : "like"}</li>
                    <li>{nbComments} {nbComments > 1 ? "comments" : "comment"}</li>
                </ul>
                {nbComments === 0 ? "" : (commentIsLoaded ? <CommentContainer comments={comments}/> : <p>Chargement...</p>)}
                <Link className="btn" to="/" >Retour</Link>
            </div>
        )
    }
}

export default SingleTouit;