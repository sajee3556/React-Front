import React, {Component} from 'react';
import PropTypes from 'prop-types';
import '../Contact.css';
import {Consumer} from "../../Context";
import axios from 'axios';
import {Link} from "react-router-dom";

class Contact extends Component {
    state = {
        showContactInfo: true
    };

    onShowClick = e => {
        this.setState({showContactInfo: !this.state.showContactInfo})
    };

    onDeleteClick = (id, dispatch) => {
        // this.props.deleteClickHandler();
        axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(res => dispatch({type: 'DELETE_CONTACT', payload: id}));
        // dispatch({type:'DELETE_CONTACT',payload: id});
    };

    render() {
        const {contact} = this.props;
        const {showContactInfo} = this.state;
        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (
                        <div className="card card-body mb-3">
                            <h4>{contact.name} <i onClick={this.onShowClick} className="fas fa-sort-down"
                                                  style={{cursor: 'pointer'}}></i>
                                <i onClick={this.onDeleteClick.bind(this, contact.id, dispatch)}
                                   className="fas fa-times"
                                   style={{cursor: 'pointer', float: 'right', color: 'red'}}></i>
                                <Link to={`contact/edit/${contact.id}`}>
                                    <i className="fas fa-pencil-alt"
                                       style={{
                                           cursor: 'pointer',
                                           float: 'right',
                                           color: 'black',
                                           marginRight: '1rem'
                                       }}></i>
                                </Link>
                            </h4>
                            {showContactInfo ? (<ul className="list-group">
                                <li className="list-group-item">Email: {contact.email}</li>
                                <li className="list-group-item">Phone: {contact.phone} </li>
                            </ul>) : null}
                        </div>
                    )
                }
                }
            </Consumer>
            // <div className="card card-body mb-3">
            //     <h1>{name} <i onClick={this.onShowClick} className="fas fa-sort-down"
            //                   style={{cursor: 'pointer'}}></i>
            //         <i onClick={this.onDeleteClick} className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}}></i>
            //     </h1>
            //     {showContactInfo ? (<ul className="list-group">
            //         <li className="list-group-item">Email: {email}</li>
            //         <li className="list-group-item">Phone: {phone} </li>
            //     </ul>) : null}
            // </div>
        )
    }
}

Contact.propTypes = {
    // key: PropTypes.number.isRequired,
    // name: PropTypes.string.isRequired,
    // email: PropTypes.string.isRequired,
    // phone: PropTypes.string.isRequired,
    // deleteClickHandler: PropTypes.func.isRequired
    contact: PropTypes.object.isRequired
};

export default Contact;