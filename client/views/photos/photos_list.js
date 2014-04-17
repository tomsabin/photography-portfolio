Template.photosList.helpers({
  photos: function () {
    return Photoset.find();
  }
});
