import React, { Component } from 'react';
import { connect } from 'react-redux';

// MATERIAL UI
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Grid, Button }from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';

// material-ui-pickers
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from 'material-ui-pickers';

import Moment from 'moment';

const moment = Moment;

const styles = theme => ({
    textField: {
        width: 250
    },
    dialogTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'left',
        height: '1vh',
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    dialogDiv: {
        align: 'center',
        margin: 'auto',
        justifyContent: 'center'
    },
  });

class AddFinal extends Component {

    state = {
        // The first commit of Material-UI
        userStep_id: this.props.userStepId,
        location: '',
        date: new Date(),
        time: '',
      };
    
    // sets the state of date to selected date
       handleDateChange = date => {
        this.setState({
            date: date
        });
    console.log('in HANDLE DATE CHANGE', this.state)
    };

    handleChange= propertyName => (event) => {
        this.setState({
          [propertyName]: event.target.value,
        });
        console.log('in handleChange', this.state)
     }

    // submits the data to post in the database
      handleComplete = () => {
        console.log('--in HANDLE COMPLETE --', this.state)
        this.props.dispatch({
            type: 'POST_FINAL_WALKTHROUGH',
            payload:{
                userStep_id: this.props.userStepId,
                location: this.state.location,
                date: this.state.date = moment(this.state.date).format('MMM Do YYYY'),
                time: this.state.time,
            }
        })
        this.setState({
            userStep_id: this.props.userStepId,
            location: '',
            date: new Date(),
            time: '',
        });
        this.props.handleClose();
    } 

    render() {

        const { classes } = this.props;

        return (
            <div>
                <Dialog
                    open={this.props.state}
                    onClose={this.props.handleClose}
                    aria-labelledby="form-dialog-title"
                    className={classes.dialogDiv}
                >
                    <DialogContent dividers>
                        <DialogTitle className={classes.dialogTitle} >Add Final Walkthrough </DialogTitle>
                    </DialogContent>
                    <DialogContent >
                        <TextField
                            label="Location"
                            value={this.state.location}
                            onChange={this.handleChange('location')}
                            margin="normal"
                            InputLabelProps={{
                                shrink: true,
                                }}
                            className={classes.textField}
                            multiline
                            rows="4"
                            variant="outlined"
                            fullWidth
                        />
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <Grid>
                                <DatePicker
                                    label="Date picker"
                                    value={this.state.date}
                                    onChange={this.handleDateChange}
                                    format="MMM d yyyy"
                                    align="center"
                                />
                            </Grid>
                        </MuiPickersUtilsProvider>
                        <form>
                            <TextField
                                label="Time"
                                value={this.state.time}
                                onChange={this.handleChange('time')}
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </form>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.handleClose} variant="outlined" color="secondary">
                        Cancel
                        </Button>
                        <Button onClick={this.handleComplete} color="secondary" variant="contained">
                        Save
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    walkThrough: state.walkThrough
});

AddFinal.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles) (connect(mapStateToProps)(AddFinal));