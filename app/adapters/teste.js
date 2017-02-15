import DS from 'ember-data';
import ENV from '../../config/environment';
import config from 'desafio/config/environment';
import Ember from 'ember';

export default DS.RESTAdapter.extend({
  host: config.apiHost,
  namespace: config.apiNamespace,

  pathForType: function(type) {
    var dasherized = Ember.String.dasherize(type);
    return Ember.String.pluralize(dasherized);
  }

  // headers: {
  //   //"Content-Type": "application/json",
  //   "Accept":"application/json"
  // }

});
