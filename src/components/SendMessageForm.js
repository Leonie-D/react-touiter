import React from 'react';
import {sendTouit} from '../api/TouitAPI';

class SendMessageForm extends React.Component {

    submit = (ev) => {
        ev.preventDefault();
        const {pseudo, message} = ev.target;
        sendTouit(pseudo, message, this.props.updateTouits);
    }

    render() {
        return (
            <form className="sendForm" onSubmit={this.submit}>
                <div>
                    <label style={{display: 'none'}}>Pseudo:</label>
                    <input placeholder="pseudo" name="pseudo"></input>
                </div>
                <div>
                    <label style={{display: 'none'}}>Message:</label>
                    <textarea placeholder="message" name="message"></textarea>
                </div>
                <button>Envoyer</button>
            </form>
        )
    }
}

export default SendMessageForm;