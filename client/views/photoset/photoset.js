Template.photoset.rendered = function () {
  Session.set('activateFadeIn', null);
  Deps.autorun(function () {
    var lastViewedPhotoId = Session.get('lastViewedPhotoId');
    if (lastViewedPhotoId) {
      var offset = $('#'+lastViewedPhotoId).offset();
      if (offset) {
        $('html, body').animate({ scrollTop: offset.top }, 400);
      }
    }
  });
};

Template.photoset.fadeIn = function () {
  Meteor.defer(function () {
    if (Session.get('activateFadeIn')) {
      fadeInPhotos();
    } else {
      showPhotos();
    }
  });
}

Template.photoset.events = {
  'click .load-more': function (event) {
    Session.set('activateFadeIn', true);
  }
}
