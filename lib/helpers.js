showPhotos = function () {
  $('.photo-container').addClass('loaded');
}

fadeInPhotos = function () {
  $('.photo-container').each(function (index) {
    var that = this;
    setTimeout(function () {
      $(that).addClass('loaded');
    }, 100 * index);
  });
}
