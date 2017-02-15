import DS from 'ember-data';

export default DS.Model.extend({
  hotel: DS.attr('string'),
  id: DS.attr('number'),
  description: DS.attr('string'),
  award: DS.attr('string'),
  isPreferential: DS.attr('number'),
  location: DS.attr('string')
});
