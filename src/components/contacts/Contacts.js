import React, {Component} from 'react';
import Contact from "./Contact";
import {Consumer} from "../../Context";

class Contacts extends Component {
    // constructor() {
    //     super();
    // }

    // deleteContact = (id) => {
    //     const {contacts} = this.state;
    //     const newContacts = contacts.filter(
    //         contact => contact.id !== id
    //     );
    //     this.setState({contacts: newContacts});
    // };

    render() {
        return (
            <Consumer>
                {value => {
                    const {contacts} = value;
                    return (
                        <React.Fragment>
                            {
                                contacts.map(
                                    contact => (
                                        <Contact
                                            key ={contact.id}
                                            contact = {contact}
                                            // name={contact.name}
                                            // email={contact.email}
                                            // phone={contact.phone}
                                            // deleteClickHandler={this.deleteContact.bind(this, contact.id)}
                                        />
                                    )
                                )
                            }
                        </React.Fragment>
                    );
                }}
            </Consumer>
        )
        // const {contacts} = this.state;
        // return (
        //     <React.Fragment>
        //         {
        //             contacts.map(
        //                 contact => (
        //                     <Contact
        //                         key ={contact.id}
        //                         name={contact.name}
        //                         email={contact.email}
        //                         phone={contact.phone}
        //                         deleteClickHandler={this.deleteContact.bind(this,contact.id)}
        //                     />
        //                 )
        //             )
        //         }
        //     </React.Fragment>
        // );
    }
}

export default Contacts;