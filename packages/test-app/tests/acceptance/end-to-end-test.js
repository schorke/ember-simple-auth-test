import { setupApplicationTest } from 'ember-qunit';
import { module, test } from 'qunit';
import { click, currentURL, fillIn, settled, visit } from '@ember/test-helpers';

const LOGIN_INPUT = '[data-test-identification]';
const PASSWORD_INPUT = '[data-test-password]';
const LOGIN_BUTTON = 'button[type="submit"]';
const LOGOUT_BUTTON = '#logout-button';
const ONE_BUTTON = '[data-test-button="one"]';

module('End-to-end | End-to-end Test Group', function(hooks) {
  setupApplicationTest(hooks);

  test('smoke test', async function(assert) {
    await login('letme', 'in');
    await navigateToProtectedRouteAndLogout();
    await login('letme', 'in');

    async function login(username, password) {
      await visit('/login');

      await fillIn(LOGIN_INPUT, username);
      await fillIn(PASSWORD_INPUT, password);
      await click(LOGIN_BUTTON);

      await settled();

      assert.equal(currentURL(), '/', 'Should navigate to /');
    }

    async function navigateToProtectedRouteAndLogout() {
      // await visit('/one');
      await click(ONE_BUTTON);

      assert.equal(currentURL(), '/one', 'Should navigate to /one');

      await click(LOGOUT_BUTTON);

      await settled();
    }
  });
});
