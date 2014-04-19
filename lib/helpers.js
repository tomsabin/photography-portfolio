showPhotos = function () {
  $('.image').addClass('loaded');
}

fadeInPhotos = function () {
  $('.image').each(function (index) {
    var that = this;
    setTimeout(function () {
      $(that).addClass('loaded');
    }, 100 * index);
  });
}
