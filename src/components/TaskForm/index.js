import React, { Component } from 'react';
import {
  Button,
  DialogTitle,
  Dialog,
  DialogContent,
  DialogActions,
  withStyles,
  TextField,
} from '@material-ui/core';
import styles from '../../containers/Taskboard/styles';

class TaskForm extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Dialog
        onClose={onClose}
        aria-labelledby="simple-dialog-title"
        open={open}
      >
        <DialogTitle id="simple-dialog-title">Thêm mới công việc</DialogTitle>
        <DialogContent>
          <TextField
            id="standaed-name"
            label="Name"
            className={classes.textField}
            margin="normal"
          />
          <TextField
            id="standaed-name"
            label="Name"
            className={classes.textField}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="primary">
            Cencel
          </Button>
          <Button onClick={onClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskForm);
