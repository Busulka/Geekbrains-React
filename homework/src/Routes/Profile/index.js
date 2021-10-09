import React from "react";
import {Provider, useDispatch, useSelector} from 'react-redux';
import {store} from "../../Redux/profile/store";
import {TOGGLE_CHECKBOX} from "../../Redux/profile/store/toggle/actionTypes";





const ProfileView = () => {
    const dispatch = useDispatch();
    const checkbox = useSelector((state) => {
        console.log(state);
            return state.checkbox;
        })

    return(
        <div>
            <h1>Profile</h1>
            <br/>
            <input type= "checkbox"
                   name="checkbox"
                   id="checkbox"
                        checked={checkbox}
                        onChange={() => {
                            dispatch({
                                type:TOGGLE_CHECKBOX,
                            })
                        }}
                    />
            <label htmlFor="checkbox">Profile Checkbox</label>

        </div>)
}

export const Profile = (props) => {
    return(
        <Provider store={store}>
            <ProfileView/>
        </Provider>
    )
}
