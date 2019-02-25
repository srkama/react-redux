import Raven from 'raven-js';

const sentry_key = 'e1b3f77a61b54472bad49b9258ba1689';
const sentry_app = '1399968';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
