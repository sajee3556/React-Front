import React, {Component} from 'react';
import {Consumer} from "../../Context";
import axios from 'axios';
import TestFormGroup from "../layout/TestFormGroup";

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        errors: {}
    };
    // onNameChange = e => this.setState({name: e.target.value});
    // onEmailChange = e => this.setState({email: e.target.value});
    // onPhoneChange = e => this.setState({phone: e.target.value});
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
        // const newContact = {
        //     id: uuid(),
        //     name,
        //     email,
        //     phone
        // };
        const newContact = {
            name,
            email,
            phone
        };
        axios.post('https://jsonplaceholder.typicode.com/users',newContact)
            .then(res => dispatch({type: 'ADD_CONTACT', payload: res.data}));
        // dispatch({type: 'ADD_CONTACT', payload: newContact});

        //clear values
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
                        <div className="card-header">Add Contact</div>
                        <div className="card-body">
                            <form onSubmit={this.onSubmit.bind(this, dispatch)}>

                                {/*<div className="form-group">*/}
                                {/*<label htmlFor="name">Name</label>*/}
                                {/*<input type="text"*/}
                                {/*name="name"*/}
                                {/*className="form-control form-control-lg"*/}
                                {/*placeholder="Enter your Name...."*/}
                                {/*value={name}*/}
                                {/*onChange={this.onChange}/>*/}
                                {/*</div>*/}
                                {/*<div className="form-group">*/}
                                {/*<label htmlFor="email">Email</label>*/}
                                {/*<input type="email"*/}
                                {/*name="email"*/}
                                {/*className="form-control form-control-lg"*/}
                                {/*placeholder="Enter Email...."*/}
                                {/*value={email}*/}
                                {/*onChange={this.onChange}/>*/}
                                {/*</div>*/}
                                {/*<div className="form-group">*/}
                                {/*<label htmlFor="name">Phone</label>*/}
                                {/*<input type="text"*/}
                                {/*name="phone"*/}
                                {/*className="form-control form-control-lg"*/}
                                {/*placeholder="Enter phone number...."*/}
                                {/*value={phone}*/}
                                {/*onChange={this.onChange}/>*/}
                                {/*</div>*/}


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
                                       value="Add Contact"
                                       className="btn btn-light btn-block"/>
                            </form>
                        </div>
                    </div>)
                }}
            </Consumer>
        )
    }

}

export default AddContact;