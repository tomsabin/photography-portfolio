Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function () {
    return Meteor.subscribe('photoset');
  }
});

Router.map(function () {
  this.route('photoset', { path: '/' });
});
Router.onBeforeAction('loading');
