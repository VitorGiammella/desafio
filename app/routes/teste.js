import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return Ember.RSVP.hash({
      filtersHotel: this.store.findAll('hotel'),
      filterId: this.store.findAll('id'),
      filtersDescription: this.store.findAll('description'),
      filterAward: this.store.findAll('award'),

      filterisPreferential: this.store.findAll('isPreferential'),
      filterLocation: this.store.findAll('location'),

      products: this.store.findAll('product', { include: 'coverages' })
    });
  },

  setupController(controller, models) {
    controller.setProperties(models);
  },

  // ref:  https://guides.emberjs.com/v2.10.0/routing/query-params/
  resetController(controller, isExiting) {
    if (isExiting) {
      //console.log("resetController produtos");
      // isExiting would be false if only the route's model was changing
      controller.resetController();
    }
  },

  actions: {
    // https://guides.emberjs.com/v2.10.0/routing/query-params/
    // Fazer o reset



    // https://guides.emberjs.com/v2.10.0/routing/loading-and-error-substates/
    // loading(transition) {
    //   let controller = this.controllerFor('application');
    //   controller.set('currentlyLoading', true);
    //   transition.promise.finally(function() {
    //       controller.set('currentlyLoading', false);
    //   });
    // }
  }

});
