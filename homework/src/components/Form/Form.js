import './form.css';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const Form = ({ value, useStyles, handleSubmit, handleChange, inputRef, inputProps, buttonProps }) => {
    const classes = useStyles();

    return (
        <form className="form" onSubmit={handleSubmit}>
            <TextField className={classes.inputRoot} inputRef={inputRef} value={value} onChange={handleChange} {...inputProps}/>
            <Button variant="contained" type="submit" className={classes.buttonRoot}>{buttonProps}</Button>
        </form>
    );
}