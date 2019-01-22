import React , {Component} from 'react';
import axios from 'axios';

const Context = React.createContext();

const reducer = (state, action) => {
    switch (action.type){
        case 'DELETE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload
                )
            };
        case 'ADD_CONTACT':
            return{
                ...state,
                contacts:[action.payload,...state.contacts]
            };
        case 'UPDATE_CONTACT':
            return{
                ...state,
                contacts: state.contacts.map(contact =>
                    (contact.id === action.payload.id ? (contact = action.payload ): contact))
            };
        default:return state;
    }
};

export class Provider extends Component{
    state = {
        contacts: [],
        //     {
        //         id : 1,
        //         name: "Direct Manager",
        //         email: "react@gmail.com",
        //         phone: "123-456-7890"
        //     },
        //     {
        //         id : 2,
        //         name: "Line Manager",
        //         email: "react1@gmail.com",
        //         phone: "123-456-7892"
        //     },
        //     {
        //         id : 3,
        //         name: "Product Manager",
        //         email: "react2@gmail.com",
        //         phone: "123-456-7893"
        //     }
        // ],
        dispatch: action => {
            this.setState(state => reducer(state,action))
        }
    };

    // componentDidMount(){
    //     // fetch('https://jsonplaceholder.typicode.com/users')
    //     //     .then(response => response.json())
    //     //     .then(data => this.setState({
    //     //         contacts:data
    //     //     }));
    //
    //     axios.get('https://jsonplaceholder.typicode.com/users')
    //         .then(res => this.setState({
    //         contacts:res.data
    //     }))
    // }

    async componentDidMount(){

        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        //const res = await axios.get('http://localhost:8085/students');
        this.setState({contacts:res.data});
    }

    render(){
        return(
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;