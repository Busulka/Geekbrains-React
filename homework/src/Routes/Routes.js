import React from "react";
import {Switch,Route} from "react-router-dom";
import {Home} from "../components/Home";
import {Profile} from "./Profile";
import {NotFound} from "./NotFound";
import {Movies} from "./Movies";





export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path="/home/:chatId?" component={Home} />
            <Route exact path='/profile' component={Profile}/>
            <Route  path='/movies' component={Movies}/>
            <Route path='*' component={NotFound}/>
        </Switch>
    );
};
