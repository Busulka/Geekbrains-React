import React from "react";
import { useDispatch, useSelector} from 'react-redux';
import {TOGGLE_CHECKBOX} from "../../Store/profile/toggle/actionTypes";





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
            <ProfileView/>
    )
}
