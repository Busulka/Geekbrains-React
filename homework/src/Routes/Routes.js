import React from "react";
import {Switch,Route} from "react-router-dom";
import {Home} from "./Home";
import {Chats} from "./Chats";
import {Chat} from "./Chats/Chat";
import {Profile} from "./Profile";
import {NotFound} from "./NotFound";

export const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/chats' component={Chats}/>
            <Route path='/chats/:chatId' component={Chat}/>
            <Route path='/profile' component={Profile}/>
            <Route path='*' component={NotFound}/>
        </Switch>
    );
};
