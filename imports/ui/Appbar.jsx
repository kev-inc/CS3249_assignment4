import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import orange from '@material-ui/core/colors/orange'


const useStyles = makeStyles((theme) => ({
    appbar: {
        backgroundColor: orange[700],
        color: 'black'
    },
    title: {
        flexGrow: 1,
        color: 'white'
    }
}));

const Appbar = (props) => {
    const classes = useStyles()
    return (
        <AppBar position="static" className={classes.appbar}>
            <Toolbar>
                <Typography variant="h6" className={classes.title}>
                    {props.title}
                </Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Appbar