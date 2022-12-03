import './App.css';
import * as React from 'react';
import Dashboard from './component/dashboard';
import Contacts from './component/contactList';
import DashboardContent from './component/dashboard';
import Request from './component/request';
import Profile from './component/profile';
import Message from './component/message';


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
                <Route path="/user/dashboard"><Dashboard/></Route>
                <Route path="/user/contacts"><Contacts/></Route>
                <Route path="profile"><Profile/></Route>
          		<Route path="message"><Message/></Route>
          		<Route path="contacts"><contactList/></Route>
          		<Route path="request"><Request/></Route>
                <Route path="*" element={<Typography>NENI TAKE</Typography>} />
            </Switch>
        </>;
    }
}