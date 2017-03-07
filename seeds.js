var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
 {
  name: "Lamby's Rest",
  image:"http://www.campjellystone.com/wp/wp-content/uploads/2012/08/IllinoisCamping1.jpg",
  description: "You won't get much rest at Lamby's Rest, unfortunately; the owner lives on the property and snores loud enough to wake a hibernating grizzly bear."
  
 },
  {
  name: "Allison Peak",
  image:"http://www.montana-camping-guide.com/images/Montana-mountain-lake-campground.jpg",
  description: "You can see for miles up on Allison peak! But can you see in kilometers? If so, how many? Is that number divisible by 3? Now what's that numbers' square root? If a train leaves at 5 traveling at 40 mph....."
  
 },
  {
  name: "Cooper's Hovel",
  image: "http://visitmckenzieriver.com/oregon/wp-content/uploads/2015/06/paradise_campground.jpg",
  description: "Cooper's hovel may not be the most beautiful campground. It also may not be the easiest to get to and access. Actually, this place just isn't that nice. But it's quiet and never crowded and, oddly, that's what makes it beautiful AND nice."
  
 },
 
 ];


function seedDB(){
 //remove all campgrounds
Campground.remove({}, function(err){
 if(err){
  console.log(err);
 }
 console.log("removed");
 //add a few Campgrounds
data.forEach(function(seed){
 Campground.create(seed,function(err, campground){
  if(err){
   console.log(err);
  } else {
   console.log("Added Seed Data!");
   //add comment to Campgrounds
   Comment.create(
    {
    text: "This place is great, but I wish there was internet",
   author: "Homer"
   }, function(err, comment){
    if(err){
     console.log(err);
    } else {
    campground.comments.push(comment);
    campground.save();
    console.log("Created New Comment")
    }
   })
  }
 });
});
}); 



}

module.exports = seedDB;