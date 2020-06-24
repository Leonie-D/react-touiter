import React from 'react';
import {Link} from "react-router-dom";
import {sendComment} from '../api/TouitAPI';

class SendCommentForm extends React.Component {
    submit = (ev) => {
        ev.preventDefault();
        const {pseudo, message} = ev.target;
        const {idtouit} = this.props.location.state;
        sendComment(pseudo, message, idtouit);
        pseudo.value = "";
        message.value = "";
    }

    render() {
        return (
            <div>
                <form className="sendCommentForm" onSubmit={this.submit}>
                    <div>
                        <label style={{display: 'none'}}>Pseudo:</label>
                        <input placeholder="pseudo" name="pseudo"></input>
                    </div>
                    <div>
                        <label style={{display: 'none'}}>Message:</label>
                        <textarea placeholder="message" name="message"></textarea>
                    </div>
                    <button className="btn">Envoyer</button>
                </form>
                <Link className="btn" to="/" >Retour</Link>
            </div>
        )
    }
}

export default SendCommentForm;