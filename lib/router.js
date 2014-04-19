Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function () {
    return Meteor.subscribe('photoset');
  }
});

Router.map(function () {
  this.route('photoset', {
    path: '/'
  });

  this.route('photo', {
    path: '/photo/:_id',
    data: function () {
      return Photoset.findOne(new Meteor.Collection.ObjectID(this.params._id));
    },
    onAfterAction: function () {
      document.title = 'Tom Sabin | Photo: ' + this.data().title
    }
  });
});

Router.onBeforeAction('loading');
