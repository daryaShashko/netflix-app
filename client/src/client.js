import React from 'react';
import ReactDOM from 'react-dom';

let url = 'https://netflixroulette.net/api/api.php?actor=Nicolas%20Cage';
/*
var shows = fetch(url)
 .then(res => res.json())
 .then((out) => {
  // console.log(out);
 })
 .catch(err => console.error(err));

console.log(shows);*/
var data;

function successListener() {
  var data = JSON.parse(this.responseText);
  console.log(data);
}

function failureListener(err) {
  console.log('Request failed', err);
}

var request = new XMLHttpRequest();
request.onload = successListener;
request.onerror = failureListener;
request.open('get', url , true);
request.send();


 console.log(data);
/*
var shows = $.getJSON("https://netflixroulette.net/api/api.php?actor=Nicolas%20Cage", function (data) {
  return jQuery.parseJSON(JSON.stringify(data));
});

console.log(shows);*/


var media_shows = [

  {
    "unit": 84,

    "show_id": 60032563,

    "show_title": "Kill Bill: Vol. 2",

    "release_year": "2004",

    "rating": "3.8",

    "category": "Action & Adventure",

    "show_cast": "Uma Thurman, David Carradine, Michael Madsen, Daryl Hannah, Gordon Liu, Michael Parks, Perla Haney-Jardine, Helen Kim, Claire Smithies, Clark Middleton",

    "director": "Quentin Tarantino",

    "summary": "The Bride has three left on her rampage list: Budd, Elle Driver and Bill himself. But when she arrives at Bill's house, she's in for a surprise.",

    "poster": "http://netflixroulette.net/api/posters/60032563.jpg",

    "mediatype": 0,

    "runtime": "137 min"

  },

  {

    "unit": 87,

    "show_id": 60031236,

    "show_title": "Kill Bill: Vol. 1",

    "release_year": "2003",

    "rating": "3.8",

    "category": "Action & Adventure",

    "show_cast": "Uma Thurman, Lucy Liu, Vivica A. Fox, Daryl Hannah, David Carradine, Michael Madsen, Julie Dreyfus, Chiaki Kuriyama, Sonny Chiba, Gordon Liu",

    "director": "Quentin Tarantino",

    "summary": "An assassin is shot by her ruthless employer, Bill, and other members of their assassination circle. But she lives -- and plots her vengeance.",

    "poster": "http://netflixroulette.net/api/posters/60031236.jpg",

    "mediatype": 0,

    "runtime": "111 min"

  },

  {

    "unit": 914,

    "show_id": 880640,

    "show_title": "Pulp Fiction",

    "release_year": "1994",

    "rating": "4.1",

    "category": "Oscar-winning Movies",

    "show_cast": "John Travolta, Samuel L. Jackson, Uma Thurman, Bruce Willis, Harvey Keitel, Tim Roth, Amanda Plummer, Ving Rhames, Eric Stoltz, Maria de Medeiros",

    "director": "Quentin Tarantino",

    "summary": "Weaving together three stories featuring a burger-loving hit man, his philosophical partner and a washed-up boxer, Quentin Tarantino influenced a generation of filmmakers with this crime caper's stylized, over-the-top violence and dark comic spirit.",

    "poster": "http://netflixroulette.net/api/posters/880640.jpg",

    "mediatype": 0,

    "runtime": "154 min"

  },

  {

    "unit": 943,

    "show_id": 60010514,

    "show_title": "Jackie Brown",

    "release_year": "1997",

    "rating": "3.7",

    "category": "Dramas",

    "show_cast": "Pam Grier, Samuel L. Jackson, Robert Forster, Bridget Fonda, Michael Keaton, Robert De Niro, Michael Bowen, Chris Tucker, Lisa Gay Hamilton, Tommy 'Tiny' Lister",

    "director": "Quentin Tarantino",

    "summary": "Jackie Brown is an aging flight attendant who smuggles cash on the side. But when she's busted and pressured to help with an investigation, she plans to play the opposing forces against each other and walk away with the dough.",

    "poster": "http://netflixroulette.net/api/posters/60010514.jpg",

    "mediatype": 0,

    "runtime": "154 min"

  },

  {

    "unit": 1151,

    "show_id": 902003,

    "show_title": "Reservoir Dogs",

    "release_year": "1992",

    "rating": "4.0",

    "category": "Independent Movies",

    "show_cast": "Harvey Keitel, Tim Roth, Michael Madsen, Steve Buscemi, Chris Penn, Lawrence Tierney, Edward Bunker, Quentin Tarantino, Randy Brooks, Kirk Baltz",

    "director": "Quentin Tarantino",

    "summary": "Quentin Tarantino's directorial debut is raw, violent, often mimicked -- and unforgettable. A botched robbery indicates a police informant, and the pressure mounts in the aftermath at a warehouse. Crime begets violence as the survivors unravel.",

    "poster": "http://netflixroulette.net/api/posters/902003.jpg",

    "mediatype": 0,

    "runtime": "99 min"

  },

  {

    "unit": 1463,

    "show_id": 520179,

    "show_title": "Four Rooms",

    "release_year": "1995",

    "rating": "3.6",

    "category": "Comedies",

    "show_cast": "Tim Roth, Antonio Banderas, Jennifer Beals, Bruce Willis, Paul Calderon, Madonna, Marisa Tomei, Quentin Tarantino, Ione Skye, Lili Taylor",

    "director": "Quentin Tarantino, Robert Rodriguez, Allison Anders, Alexandre Rockwell",

    "summary": "One mad New Year's Eve, an overwhelmed bellboy copes with witches and diabolical children, gets caught in the middle of a sour relationship and settles a bloody bet for members of a superstar's entourage.",

    "poster": "http://netflixroulette.net/api/posters/520179.jpg",

    "mediatype": 0,

    "runtime": "98 min"

  }

];

var MediaShow = React.createClass({
  render: function () {
    var data = this.props.data;
    var mediaShowTemplate = data.map(function (item, index) {
      return (
        <div key={index} className="media-show__wrapper">

          <div className="media-show__poster">
            <img src={item.poster} alt={item.show_title}/>
          </div>

          <div className="media-show__description">
            <header className="media-show__header">
              <h3 className="media-show__title">{item.show_title}</h3>
              <span className="media-show__rating">{item.rating}</span>
              <p className="media-show__category">{item.category}</p>
              <span className="media-show__release-year">{item.release_year}</span>
              <span className="media-show__runtime">{item.runtime}</span>
            </header>

            <p className="media-show__summary">{item.summary}</p>

            <footer className="media-show__footer">
              <span className="media-show__director">Director: {item.director}</span>
              <span className="media-show__cast">Cast: {item.show_cast}</span>
            </footer>

          </div>
        </div>
      )
    });

    return (
      <div className="media-show">
        { mediaShowTemplate}
      </div>
    )
  }
});

var BriefMediaShow = React.createClass({
  render: function () {
    var data = this.props.data;
    var briefMediaShowTemplate = data.map(function (item, index) {
      return (
        <div key={index} className="media-show__description">


          <div className="media-show__poster">
            <img src={item.poster} alt={item.show_title}/>
          </div>

          <header className="media-show__header">
            <h3 className="media-show__title">{item.show_title}</h3>
            <span className="media-show__release-year">{item.release_year}</span>
            <p className="media-show__category">{item.category}</p>
          </header>

        </div>
      )
    });

    return (
      <div className="media-show media-show_brief">
        {briefMediaShowTemplate}
      </div>
    )
  }
});

var App = React.createClass({
  render: function () {
    return (
      <div>
        <MediaShow data={media_shows}/>
        <hr />
        <BriefMediaShow data={media_shows}/>
      </div>
    )
  }
});


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

