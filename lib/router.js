Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
    return Meteor.subscribe('photoset');
  }
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
  photoset: function () {
    return Photoset.find({}, this.findOptions());
  },
  data: function () {
    var hasMore = this.photoset().count() === this.limit();
    var nextPath = this.route.path({
                     photoLimit: this.limit() + this.increment
                   });
    Session.set('currentPhotoLimit', this.params.photoLimit);
    return {
      photoset: this.photoset(),
      nextPath: hasMore ? nextPath : null
    };
  }
});

Router.map(function () {
  this.route('photo', {
    path: '/photo/:_id',
    waitOn: function () {
      return Meteor.subscribe('photo', new Meteor.Collection.ObjectID(this.params._id));
    },
    data: function () {
      Session.set('viewingPhotoId', this.params._id);
      return Photoset.findOne(new Meteor.Collection.ObjectID(this.params._id));
    },
    onAfterAction: function () {
      document.title = 'Tom Sabin | Photo: ' + this.data().title;
    }
  });

  this.route('photoset', {
    path: '/:photoLimit?',
    controller: PhotosetLimitController,
    onAfterAction: function () {
      document.title = 'Tom Sabin | Photography';
    }
  });
});

Router.onBeforeAction('loading');
