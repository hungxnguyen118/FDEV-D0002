import {Button, Checkbox} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles({
    root: {
        color: grey['A200'],
        '&$checked': {
            color: green[600],
        },
    },
    checked: {},
})

const GreenCheckbox = (props) => {
    const classes = useStyles();

    return (
        <Checkbox classes={{
            root: classes.root,
            checked: classes.checked
        }} 
        color="default" {...props} />
    );
};

export default GreenCheckbox;