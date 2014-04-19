Handlebars.registerHelper('closePhoto', function () {
  var homepagePhotoLimit = Session.get('currentPhotoLimit') || '',
      currentPhotoIdAnchor = '#' + Session.get('viewingPhotoId') || '';
  return '/' + homepagePhotoLimit + currentPhotoIdAnchor;
});
