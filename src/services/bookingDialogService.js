import { BehaviorSubject } from 'rxjs';

const events$ = new BehaviorSubject({ open: false });

const bookingDialogService = {
    open: (home) => events$.next({ open: true, home }),
    close: (home) => events$.next({ open: false, home: null}),
    events$: events$.asObservable(),
};

export default bookingDialogService;