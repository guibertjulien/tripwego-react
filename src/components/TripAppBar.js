import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';

const styles = {
    root: {
        flexGrow: 1,
    },
};
const TripAppBar = ({counter}) => (
    <div className='TripAppBar'>
        <AppBar position="static">
            <Toolbar>
                <Typography variant="title" color="inherit">
                    Trips: {counter}
                </Typography>
            </Toolbar>
        </AppBar>
    </div>
)

TripAppBar.propTypes = {
    counter: PropTypes.object.isRequired,
};

export default withStyles(styles)(TripAppBar);