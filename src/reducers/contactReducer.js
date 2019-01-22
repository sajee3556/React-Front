import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, GET_CONTACTS, UPDATE_CONTACT} from "../actions/types";

const initialState = {
    contacts: [
        // {
        //     id: 1,
        //     name: "Direct Manager",
        //     email: "react@gmail.com",
        //     phone: "123-456-7890"
        // },
        // {
        //     id: 2,
        //     name: "Line Manager",
        //     email: "react1@gmail.com",
        //     phone: "123-456-7892"
        // },
        // {
        //     id: 3,
        //     name: "Product Manager",
        //     email: "react2@gmail.com",
        //     phone: "123-456-7893"
        // }
    ],
    contact: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        // case GET_CONTACTS:
        //     return{
        //         ...state
        //     };
        // case DELETE_CONTACT:
        //     return{
        //         ...state,
        //         contacts: state.contacts.filter(contact =>
        //             contact.id !== action.payload
        //         )
        //     };
        // case ADD_CONTACT:
        //     return{
        //         ...state,
        //         contacts:[action.payload,...state.contacts]
        //     };
        // case UPDATE_CONTACT:
        //     return{
        //         ...state,
        //         contacts: state.contacts.map(contact =>
        //             (contact.id === action.payload.id ? (contact = action.payload ): contact))
        //     };
        case GET_CONTACTS:
            return {
                ...state,
                contacts: action.payload
            };
        case GET_CONTACT:
            return {
                ...state,
                contact: action.payload
            };
        case DELETE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.filter(contact =>
                    contact.id !== action.payload
                )
            };
        case ADD_CONTACT:
            return {
                ...state,
                contacts: [action.payload, ...state.contacts]
            };
        case UPDATE_CONTACT:
            return {
                ...state,
                contacts: state.contacts.map(contact =>
                    (contact.id === action.payload.id ? (contact = action.payload ) : contact))
            };
        default:
            return state;
    }
}