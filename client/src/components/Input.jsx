import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from './Button.jsx';
import PropTypes from 'prop-types';

export class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentWillMount() {
    this.search();
  }

  updateSearch() {
    this.search(this.refs.query.value);
  }

  render() {
    return (
      <div className="input-area__wrapper">
        <input ref='query' onChange={(e) => {this.updateSearch();}} type={props.inputType}
               className={'input-area__item ' + props.className} placeholder={props.inputPlaceholder}/>
        <Button type="submit" className="button_icon button_icon-search"/>
      </div>
    )
  }

  search(query = 'Jack+Reacher') {
    var url = `https://api.themoviedb.org/3/search/movie?api_key=7ce8b734e18d23ac5345c37de7911c86&query=${query}`;
    Request.get(url).then((response) => {
      this.setState({
        movies: response.body.results,
        total: response.body.total_results,
      })
    })
  }
}

Input.defaultProps = {
  className: '',
  type: 'input',
  inputPlaceholder: 'input here'
};

Input.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string
};