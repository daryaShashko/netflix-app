import React from 'react';
import {HeadLine} from './HeadLine.js';
import {Input} from './Input.js';
import {Button} from './Button.js';
import {SortArea} from './SortArea.js';

export default class SearchArea extends React.Component {
  render() {
    return (
      <div className="search-area">
        <HeadLine className="head-line_uppercase head-line_color-white" text="Find your movie"/>
        <Input inputType="search" className="input-area_search" inputPlaceholder="Search here"/>
        <div className="flex-container flex-container_justify_space-between">
          <SortArea className="sort-area_title-director" headLineClass="head-line_uppercase head-line_color-white"/>
          <Button className="button_big" buttonType="button" text="Search"/>
        </div>
      </div>
    );
  }
}
