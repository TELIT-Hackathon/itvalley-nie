import './App.css';
import * as React from 'react';
import Dashboard from './components/dashboard';
import Contacts from './components/contactList';
import DashboardContent from './components/dashboard';
import Requests from './screens/requests';
import Profile from './components/profile';
import Message from './components/message';
import Box from '@mui/material/Box';
import RequestForm from './components/requestForm';
import Board from './screens/board';
import IncomingRequests from './screens/incomingRequests';
import ConcreteRequest from './screens/concreteRequest';

import UserRequests from './screens/userRequests';

import { Context } from './api';

import { Route, Switch, Redirect } from "react-router-dom";
import { Typography } from '@mui/material';
import Test from './components/test';


export default class User extends React.Component {
    render() {
        return (this.context.loggedIn() ? <>
            <Box sx={{height: 'calc(100% - 60px)', overflowY: 'scroll', overflowX: 'hidden'}}>
                <Switch>
                    <Route path="/user/dashboard">
                        <Board/>
                    </Route>
                    <Route path="/user/contacts"><Contacts/></Route>
                    <Route path="/user/profile"><Profile/></Route>
                    <Route path="/user/message"><Message/></Route>
                    <Route path="/user/requests"><Requests/></Route>
                    <Route path="/user/requestform"><RequestForm/></Route>
                    <Route path="/user/userRequests/:id" component={ConcreteRequest}/>
                    <Route path="/user/incomingRequests/:id" component={ConcreteRequest}/>
                    <Route path="/user/incomingRequests"><IncomingRequests/></Route>
                    <Route path="/user/userRequests"><UserRequests/></Route>
                    <Route path="/user/test"><Test/></Route>
                    <Route path="*" element={<Typography>NENI TAKE</Typography>} />
                </Switch>
            </Box>
            <DashboardContent/>
            
        </> : <>
            <Redirect to='/login'/>
        </>)
    }
}
User.contextType = Context