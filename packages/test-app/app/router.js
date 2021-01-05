import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('callback');
  this.route('protected', { path: '/' }, function() {
    this.route('one');
    this.route('two');
  });
});

export default Router;
