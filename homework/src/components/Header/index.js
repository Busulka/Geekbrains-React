import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
    toolbarSecondary: {
        justifyContent: 'space-evenly',
        overflowX: 'auto',
        backgroundColor: 'darkslateblue',
        borderStyle: 'solid',
        borderColor: 'deeppink',
        borderWidth: '2px',
    },
    toolbarLink: {
        padding: theme.spacing(3),
        color: 'beige',
        cursor: 'pointer'
    },
}));

export const Header = () => {
    const classes = useStyles();

    return (
        <div>
            <h1 className='heading'> Chatty Place</h1>
        <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key=""
                variant="body1"
                to="/"
                className={classes.toolbarLink}
            >
                home
            </Link>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key=""
                variant="body1"
                to="/movies"
                className={classes.toolbarLink}
            >
                Movies
            </Link>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key=""
                variant="body2"
                to="/chats"
                className={classes.toolbarLink}
            >
                chats
            </Link>
            <Link
                component={RouterLink}
                color="inherit"
                noWrap
                key=""
                variant="body2"
                to="/profile"
                className={classes.toolbarLink}
            >
                profile
            </Link>

        </Toolbar>
        </div>
    );
}