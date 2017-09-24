import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Film from './components/Film.jsx';
import FilmBrief from './components/FilmBrief.jsx';
import SearchArea from './components/SearchArea.jsx';
import {SortArea} from './components/SortArea.jsx';
import {LogoNetflix} from './components/LogoNetflix.jsx';
import {TextArea} from './components/TextArea.jsx';
import {HeadLine} from './components/HeadLine.jsx';
import MEDIA_SHOWS  from './consts';

class FilmInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit" value="Submit">Submit</button>
      </form>
    );
  }
}

export const SearchResult = () => {
  return (
    <div className="grid">
      {
        MEDIA_SHOWS.map(function (el) {
          return (
          <div className="grid__item grid__item_4" key={el.show_id}>
            <Link to={`/film/${el.show_title}`}>
            <FilmBrief
              poster={el.poster}
              showTitle={el.show_title}
              releaseYear={el.release_year}
              category={el.category}
            />
            </Link>
          </div>
            );
          })
        }
    </div>
  )
};

export default class Search extends React.Component {

  render() {
    return (
      <div className="page">
        <div className="page__wrapper">

          <div className="page__header">
            <div className="content-wrapper">

              <div className="grid">
                <div className="grid__item grid__item_12">
                  <LogoNetflix />
                </div>
              </div>

              <div className="grid">
                <div className="grid__item grid__item_12">
                  <SearchArea />
                  <Link to='/search/a'>Schedule</Link>
                </div>
              </div>
            </div>
          </div>


          <div className="page__body">
            <div className="wrapper wrapper_bgc_grey"/>

            <div className="content-wrapper">

              {this.props.children}

            </div>
          </div>

          <div className="page__footer">
            <div className="content-wrapper">
              <LogoNetflix />
            </div>
          </div>
        </div>
      </div>
    );
  }
};