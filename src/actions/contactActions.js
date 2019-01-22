import {ADD_CONTACT, DELETE_CONTACT, GET_CONTACT, GET_CONTACTS, UPDATE_CONTACT} from "./types";
import axios from 'axios';

// export const getContacts = ()=> dispatch => {
//   return{
//       type : GET_CONTACTS
//   };
// };

// export const deleteContacts = (id) => {
//     return{
//         type : DELETE_CONTACT,
//         payload:id
//     };
// };

// export const addContacts = (contact) => {
//     return{
//         type : ADD_CONTACT,
//         payload: contact
//     };
// };

// export const updateContacts = () => {
//     return{
//         type : GET_CONTACTS
//     };
// };

export const getContacts = () => async dispatch => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users');
    // const res = await axios.get('http://localhost:8085/students');
    dispatch({
        type: GET_CONTACTS,
        payload: res.data
    });
};

export const deleteContacts = id => async dispatch => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => dispatch({type: 'DELETE_CONTACT', payload: id}));
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    });
};

export const addContacts = contact => async dispatch => {
    const res = await axios.post('https://jsonplaceholder.typicode.com/users', contact);
    // .then(res => dispatch({type: 'ADD_CONTACT', payload: res.data}));
    dispatch({
        type: ADD_CONTACT,
        payload: res.data
    });
};

export const getContact = id => async dispatch => {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch({
        type: GET_CONTACT,
        payload: res.data
    });
};

export const updateContact = (updateContact) => async dispatch => {
    const res = await axios.put(`https://jsonplaceholder.typicode.com/users/${updateContact.id}`, updateContact);
    dispatch({
        type: 'UPDATE_CONTACT',
        payload: res.data
    });
};