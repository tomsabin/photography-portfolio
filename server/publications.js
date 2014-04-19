Meteor.publish('photoset', function (limit) {
  return Photoset.find({}, {limit: limit});
});

Meteor.publish('photo', function (id) {
  return id && Photoset.find(id);
});
