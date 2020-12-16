import React ,  { useState } from 'react';
import { Button, Dialog, DialogTitle } from '@material-ui/core/';

const ExampleDialog = () => {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const handleClickOpen = () => {
        setOpen(true);
    }

    return (
        <>
            <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                Open simple dialog
            </Button>
            <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
                <DialogTitle id="simple-dialog-title">Set backup account</DialogTitle>
                Test Dialog
            </Dialog>
        </>
    );
};

export default ExampleDialog;