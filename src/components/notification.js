import React, { useState, useEffect } from 'react';

import MuiAlert from "@material-ui/lab/Alert";
import { Snackbar } from '@material-ui/core';
import notificationService from '../services/notificationService';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Notification () {

    const [notificationData, setNotificationData] = useState({ open: false });

    useEffect(() => {
        const subscription = notificationService.events$.subscribe(notification => setNotificationData(notification));

        return () => subscription.unsubscribe();
    });

    return (
      <Snackbar open={notificationData.open} anchorOrigin={{ vertical: "top", horizontal: "center" }} message={notificationData.message} autoHideDuration={3500}>
        <Alert severity="success" onClose={() => notificationService.close()} autoHideDuration={3500}>
          {notificationData.message}
        </Alert>
      </Snackbar>
    );
};