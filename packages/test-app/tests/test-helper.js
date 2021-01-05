import { setApplication } from '@ember/test-helpers';
import Application from '../app';
import config from '../config/environment';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
