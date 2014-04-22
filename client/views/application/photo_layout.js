Template.photoLayout.rendered = function () {
  $('body').on('keydown', function (e) {
    if (e.keyCode === 27) {
      var currentLimit = Session.get('currentLimit') || '';
      Router.go('/' + currentLimit);
    }
  });
}
