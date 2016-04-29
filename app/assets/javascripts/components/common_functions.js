var genres, filters, removeFilter, selectedFilters, resetFilters;

module.exports = {

   genres: {0: "All",
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
  },

  filters: ["0"],

  removeFilter: function(filters, value){
    var index = filters.indexOf(value);
    if (index > -1) {
      filters.splice(index, 1);
    }
  },

  selectedFilters: function(filters, genres){
    var selected = "";
    if (filters.length == 0){
      filters = ["0"];
    }
    var uniq_filters = $.unique(filters);
    for (let filter of uniq_filters){
      selected += " " + genres[filter];
    }
    return selected;
  },

  resetFilters: function(){
    var inputCheckBoxes = document.getElementsByTagName("input");
    var numOfChkBoxes = inputCheckBoxes.length;
    var iterator;
    for (iterator = 0; iterator < numOfChkBoxes; iterator++) {
      if (inputCheckBoxes[iterator].checked) {
        inputCheckBoxes[iterator].checked = false;
      }
    }
  }
};
