import { BehaviorSubject } from 'rxjs';

const events$ = new BehaviorSubject({ open: false, home: null });

const notificationService = {

    open: (message) => events$.next({ open: true, message }),
    close: () => events$.next({ open: false, message: null }),
    events$: events$.asObservable(),
};

export default notificationService