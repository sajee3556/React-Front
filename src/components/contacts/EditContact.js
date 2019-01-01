import React, {Component} from 'react';
import {Consumer} from "../../Context";
import axios from 'axios';
import TestFormGroup from "../layout/TestFormGroup";

class EditContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };
    async componentDidMount(){
        const {id} = this.props.match.params;
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
        const contact = res.data;
        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        });
    };

    onChange = e => this.setState({[e.target.name]: e.target.value});

    onSubmit = async (dispatch, e) => {
        e.preventDefault();
        const {name, email, phone} = this.state;
        if (name === '') {
            this.setState({
                errors: {name: 'Name is Required'}
            });
            return;
        }
        if (email === '') {
            this.setState({
                errors: {email: 'Email is Required'}
            });
            return;
        }
        if (phone === '') {
            this.setState({
                errors: {phone: 'Phone is Required'}
            });
            return;
        }

        const updateContact = {
            name,
            email,
            phone
        };

        const {id} = this.props.match.params;

        const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updateContact);
        console.log(res.data);
        dispatch({type: 'UPDATE_CONTACT', payload: res.data});

        this.setState({
            name: '',
            email: '',
            phone: '',
            errors: {}
        });

        this.props.history.push('/');
    };

    render() {
        const {name, email, phone, errors} = this.state;

        return (
            <Consumer>
                {value => {
                    const {dispatch} = value;
                    return (<div className="card mb-3">
                        <div className="card-header">Edit Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                                <TestFormGroup
                                    label="Name"
                                    name="name"
                                    placeholder="Enter your Name...."
                                    value={name}
                                    onChange={this.onChange}
                                    error={errors.name}
                                />
                                <TestFormGroup
                                    label="Email"
                                    name="email"
                                    type="email"
                                    placeholder="Enter Email...."
                                    value={email}
                                    onChange={this.onChange}
                                    error={errors.email}
                                />
                                <TestFormGroup
                                    label="Phone"
                                    name="phone"
                                    placeholder="Enter Phone Number...."
                                    value={phone}
                                    onChange={this.onChange}
                                    error={errors.phone}
                                />
                                <input type="submit"
                                       value="Update Contact"
                                       className="btn btn-light btn-block"/>
                            </form>
                        </div>
                    </div>)
                }}
            </Consumer>
        )
    }

}

export default EditContact;