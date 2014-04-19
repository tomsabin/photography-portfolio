Template.photoset.rendered = function () {
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
