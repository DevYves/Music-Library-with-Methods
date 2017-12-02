function Library(name, creator){
  this.name = name;
  this.creator = creator;
  this.playlists =[];

}

function Playlist(name) {
  this.name = name;
  this.tracks = [];

}

function Track (name, rating, length) {
  this.name = name;
  this.rating = rating;
  this.length = length;
}


//---HELPER FUNCTIONS

Playlist.prototype.addTrack = function(track){
  this.tracks.push(track);
}

Library.prototype.addPlaylist = function(playlist){
  this.playlists.push(playlist.name);
}

Playlist.prototype.totalDuration = function(){
  let totalDuration = 0;
  this.tracks.forEach((track) => {
    totalDuration += track.length;
  });
  return totalDuration;
}


Playlist.prototype.overAllRating = function() {
  let overAllRating = 0;
  this.tracks.forEach(track  => {
    overAllRating += track.rating;
  });
  overAllRating = overAllRating / (this.tracks.length);
  return overAllRating;
}

//defining library
const myLibrary = new Library("Friday Dance Party", "Yves");
//defining Playlist
const myPlaylist = new Playlist('Amazing stoof');
const JillPlaylist = new Playlist('Jill Bosanova');
//adding playlist to Library
myLibrary.addPlaylist(myPlaylist);
myLibrary.addPlaylist(JillPlaylist);

//adding tracks to playlist
const Party = new Track('party all night!', 5, 400);
const HappyCat = new Track("Happy Cat", 4, 900);
const Camel = new Track('Camel Swing', 2, 100);
myPlaylist.addTrack(Party);
myPlaylist.addTrack(HappyCat);
myPlaylist.addTrack(Camel);
// console.log(myPlaylist);
console.log("totalDuration", myPlaylist.totalDuration());
// console.log("overall rating:" , myPlaylist.overAllRating());
// console.log(myLibrary);


