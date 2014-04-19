Handlebars.registerHelper('closePhoto', function () {
  var currentLimit = Session.get('currentLimit') || '';
  return '/' + currentLimit;
});
