var photosData = [
  {
    "title" : "Brighton",
    "thumbnail_image_url" : "https://farm9.staticflickr.com/8478/8204599778_d33bccba9c_z.jpg",
    "original_image_url" : "https://farm9.staticflickr.com/8478/8204599778_4e5b1be586_o.jpg",
    "id" : "8204599778",
    "permalink" : "http://www.flickr.com/photos/tom-sabin/8204599778/"
  }
];

Template.photosList.helpers({
  photos: photosData
});
