import Ember from 'ember';

export default Ember.Controller.extend({
  responseMessage: '',

  isValid: Ember.computed.notEmpty('idHotel'),
  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation() {
      this.set('responseMessage', 'Resuldados da busca pelo ID:');

    }
  }
});
