import { IEventOptions, IExceptionOptions, IPageViewOptions, Tracker } from 'presentations/utils/tracker';

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    // tslint:disable-next-line:no-any
    state: any;
    options: {
      env: string;
      gaCode: string;
      route: string;
    };
    tracker: Tracker;
    ga(...args: (string | IPageViewOptions | IEventOptions | IExceptionOptions)[]): void;
  }
}
