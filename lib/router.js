Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading'
});

PhotosetLimitController = RouteController.extend({
  template: 'photoset',
  increment: 12,
  limit: function () {
    return parseInt(this.params.photoLimit) || this.increment;
  },
  findOptions: function () {
    return { limit: this.limit() };
  },
  waitOn: function () {
    return Meteor.subscribe('photoset', this.findOptions());
  },
  photoset: function () {
    return Photoset.find({}, this.findOptions());
  },
  data: function () {
    var hasMore = this.photoset().count() === this.limit();
    var nextPath = this.route.path({
                     photoLimit: this.limit() + this.increment
                   });
    return {
      photoset: this.photoset(),
      nextPath: hasMore ? nextPath : null
    };
  }
});

Router.map(function () {
  this.route('photo', {
    path: '/photo/:_id',
    data: function () {
      return Photoset.findOne(new Meteor.Collection.ObjectID(this.params._id));
    },
    onAfterAction: function () {
      document.title = 'Tom Sabin | Photo: ' + this.data().title
    }
  });

  this.route('photoset', {
    path: '/:photoLimit?',
    controller: PhotosetLimitController
  });
});

Router.onBeforeAction('loading');
