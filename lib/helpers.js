showPhotos = function () {
  $('.photoset-photo-container').addClass('loaded');
}

fadeInPhotos = function () {
  $('.photoset-photo-container').each(function (index) {
    var that = this;
    setTimeout(function () {
      $(that).addClass('loaded');
    }, 100 * index);
  });
}
