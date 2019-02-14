

var authorName = document.getElementsByName('name');
var songTitle = document.getElementsByName('title');
var submitBtn = document.getElementById('submit');


submitBtn.addEventListener('click', function(authorName, songTitle){
 console.log(data.authorName.replace(/\n/g, "<br>"));

 console.log(data.songTitle.replace(/\n/g, "<br>"));



});

var songURL = 'Author Name' + authorName + '/' + songTitle;
var displaySong = document.getElementsByTagName("div");
fetch("https://api.lyrics.ovh/v1/Coldplay/Adventure of a Lifetime")
  .then(function(response) {
    if (!response.ok) {
      throw Error(response.status);
    }
    return response.json();
  })
  .then(function(data) {

  var songText = document.getElementsByTagName('div')[0];
  songText.innerHTML = data.lyrics.replace(/\n/g, "<br>");
 
  })
  .catch(function(error) {
    console.log(error);
  });
