Meteor.publish('photoset', function () {
  return Photoset.find();
});
