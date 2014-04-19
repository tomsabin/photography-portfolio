Meteor.publish('photoset', function (limit) {
  return Photoset.find({}, {limit: limit});
});
