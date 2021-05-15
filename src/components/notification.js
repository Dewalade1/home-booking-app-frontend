import React, { useState, useEffect } from 'react';
import { Snackbar } from '@material-ui/core';
import notificationService from '../services/notificationService';

export default function Notification () {

    const [notificationData, setNotificationData] = useState({ open: false });

    useEffect(() => {
        const subscription = notificationService.events$.subscribe(notification => setNotificationData(notification));

        return () => subscription.unsubscribe();
    });

    return(
        <Snackbar
         open={ notificationData.open }
         onClose={() => notificationService.close() }
         message={ notificationData.message }
         autoHideDuration={ 3500 }
        />
    )
};