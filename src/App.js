import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from "./Context";
import AddContact from "./components/contacts/AddContact";
import About from "./components/pages/About";
import PageNotFound from "./components/pages/PageNotFound";
import Test from "./components/test/Test";
import EditContact from "./components/contacts/EditContact";

class App extends Component {
    render() {
        return (
            <Provider>
                <Router>
                    <div className="App">
                        <Header branding="Contact Manager"/>
                        <div className="container">
                            <Switch>
                                <Route exact path ="/" component={Contacts}/>
                                <Route exact path ="/contact/add" component={AddContact}/>
                                <Route exact path ="/contact/edit/:id" component={EditContact}/>
                                <Route exact path ="/about" component={About}/>
                                <Route exact path ="/test" component={Test}/>
                                <Route component={PageNotFound}/>
                            </Switch>
                            {/*<AddContact/>*/}
                            {/*<Contacts/>*/}
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;