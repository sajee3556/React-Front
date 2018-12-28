import React , {Component} from 'react';

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
        default:return state;
    }
};

export class Provider extends Component{
    state = {
        contacts: [
            {
                id : 1,
                name: "Direct Manager",
                email: "react@gmail.com",
                phone: "123-456-7890"
            },
            {
                id : 2,
                name: "Line Manager",
                email: "react1@gmail.com",
                phone: "123-456-7892"
            },
            {
                id : 3,
                name: "Product Manager",
                email: "react2@gmail.com",
                phone: "123-456-7893"
            }
        ],
        dispatch: action => {
            this.setState(state => reducer(state,action))
        }
    };

    render(){
        return(
            <Context.Provider value = {this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const Consumer = Context.Consumer;