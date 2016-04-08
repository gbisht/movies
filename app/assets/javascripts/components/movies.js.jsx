var Grid = ReactBootstrap.Grid;
var Row = ReactBootstrap.Row;
var Col = ReactBootstrap.Col;
var Input = ReactBootstrap.Input;
var Panel = ReactBootstrap.Panel;
var Button = ReactBootstrap.Button;
var Genres = {0: "All",
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  10769: "Foreign",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western"
}

var filters = ["0"];

var removeFilter = function(value){
  var index = filters.indexOf(value);
  if (index > -1) {
    filters.splice(index, 1);
  }
};

var selectedFilters = function(){
  var selected = "";
  if (filters.length == 0){
    filters = ["0"];
  }
  for (let filter of filters){
    selected += " " + Genres[filter];
  }
  return selected;
};

var resetFilters = function(){
  inputCheckBoxes = document.getElementsByTagName("input");
  var numOfChkBoxes = inputCheckBoxes.length;
  var iterator;
  for (iterator = 0; iterator < numOfChkBoxes; iterator++) {
    if (inputCheckBoxes[iterator].checked) {
      inputCheckBoxes[iterator].checked = false;
    }
  }
};

$(document).on("page:change", function() {
  React.render(
    <Movies url="movies.json"/>,
    document.getElementById('content')
  );
})