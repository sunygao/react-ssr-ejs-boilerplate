import { createSelector } from 'reselect';

const selectBrowser = (state) => state.browser;

const selectBrowserObject = createSelector(
  selectBrowser,
  (browser) => browser
);

export {
	selectBrowserObject
};

