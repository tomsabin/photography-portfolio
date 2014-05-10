Photoset = new Meteor.Collection('photoset');
Photoset.deny({
  insert: function () { true },
  update: function () { true },
  remove: function () { true }
})
