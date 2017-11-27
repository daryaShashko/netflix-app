import React from 'react';

import { connect } from 'react-redux';

import {HeadLine} from './HeadLine.jsx';
import {Input} from './Input.jsx';
import {Button} from './Button.jsx';
import PropTypes from 'prop-types';

class SortArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleClick(e){
    this.toggleActive($(e.target));
    switch(e.target.innerText.toLowerCase()){
      case 'title':
        this.props.changeSearchSorting('title');
        break;
      case 'director':
        this.props.changeSearchSorting('director');
        break;
      case 'release date':
        this.props.changeViewSorting('release date');
        break;
      case'rating':
        this.props.changeViewSorting('rating');
        break;
      default:
        break;
    }
  }

  makeActive(element){
    element.addClass('button_active');
    element.data('active', true);
  }

  removeActive(element){
    element.removeClass('button_active');
    element.data('active', false);
  }

  toggleActive(element){
    const self = this;
    const container = element.closest('.sort-area');
    const nearestActive = container.find('.button_active')[0];

    if(!element.data('active')){
      this.makeActive(element);
      if(nearestActive !== $(element)[0]){
        self.removeActive($(nearestActive));
      }
    }else {
      this.removeActive(element);
    }
  }

  render() {
    return (
      <div className={'sort-area ' + this.props.className}>
        <HeadLine className={this.props.headLineClass} text={this.props.headLineText}/>
        <button type="button" className="button button_active"
                onClick={::this.handleClick}>{this.props.firstCriterion}</button>
        <button type="button" className="button" onClick={::this.handleClick}>{this.props.secondCriterion}</button>
      </div>
    )
  }
}


export default connect(
  state => ({
    sort: state.sort,
    search: state.search
  }),
  dispatch => ({
    changeSearchSorting: (sortValue) => {
      dispatch({ type: 'SEARCH_BY', sortValue: sortValue });
    },
    changeViewSorting: (sortValue) => {
      dispatch({ type: 'SORT_BY', sortValue: sortValue });
    }
  })
)(SortArea)


SortArea.defaultProps = {
  className: '',
  headLineClass: '',
  headLineText: 'search by',
  firstCriterion: 'title',
  secondCriterion: 'director'
};

SortArea.propTypes = {
  className: PropTypes.string,
  headLineClass: PropTypes.string,
  headLineText: PropTypes.string,
  firstCriterion: PropTypes.string,
  secondCriterion: PropTypes.string
};