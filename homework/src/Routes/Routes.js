import React, {Component} from "react";
import {Switch, Route, Redirect} from "react-router-dom";
import {Chats} from "./Chats";
import {Profile} from "./Profile";
import {NotFound} from "./NotFound";
import {Movies} from "./Movies";
import {Home} from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import {auth} from "../Firebase";

function PrivateRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authenticated === true
                ? <Component {...props} />
                : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
        />
    )}

function PublicRoute({ component: Component, authenticated, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) => authenticated === false
                ? <Component {...props} />
                : <Redirect to='/profile' />}
        />
    )
}

export class Routes extends Component {
    constructor() {
        super();
        this.state = {
            authenticated: false,
            loading: true,
        }
    }
    componentDidMount() {
        auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    authenticated: true,
                    loading: false,
                });
            } else {
                this.setState({
                    authenticated: false,
                    loading: false,
                });
            }
        })
    }


    render() {
        return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <PrivateRoute path="/chats/:chatId?" authenticated={this.state.authenticated} component={Chats} />
            <PrivateRoute exact path='/profile' authenticated={this.state.authenticated} component={Profile}/>
            <Route  path='/movies' component={Movies}/>
            <PublicRoute exact path='/login' authenticated={this.state.authenticated} component={Login}/>
            <PublicRoute exact path='/signup' authenticated={this.state.authenticated} component={SignUp}/>
            <Route path='*' component={NotFound}/>
        </Switch>
    );
};}
