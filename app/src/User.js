import './App.css';
import * as React from 'react';
import Dashboard from './components/dashboard';
import Contacts from './components/contactList';
import DashboardContent from './components/dashboard';
import Requests from './screens/requests';
import Profile from './components/profile';
import Message from './components/message';
import Box from '@mui/material/Box';

import { Context } from './api';

import { Route, Switch } from "react-router-dom";
import { Typography } from '@mui/material';


export default class User extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            recents: null
        }
    } 
    render() {
        return <>
            <DashboardContent/>
            <Switch>
                <Route path="/user/dashboard">
                    DASHBOARD
                </Route>
                <Route path="/user/contacts"><Contacts/></Route>
                <Route path="/user/profile"><Profile/></Route>
          		<Route path="message"><Message/></Route>
          		<Route path="/user/requests"><Requests/></Route>
                <Route path="*" element={<Typography>NENI TAKE</Typography>} />
            </Switch>
        </>;
    }
}