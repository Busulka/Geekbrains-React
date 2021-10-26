import './form.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {useStyles} from "../ChatList/AddChat";

export const Form = ({ value, handleSubmit, handleChange, inputRef, inputProps, buttonProps }) => {
    const classes = useStyles();

    return (
        <form data-testid="form" className="form" onSubmit={handleSubmit}>
            <TextField className={classes.inputRoot} inputRef={inputRef} value={value} placeholder="Write your message here" onChange={handleChange} {...inputProps}/>
            <Button variant="contained" type="submit" className={classes.buttonRoot}>{buttonProps}</Button>
        </form>
    );
}