import React from 'react';
import ReactDOM from 'react-dom';


export default class FilmItem extends React.Component {

  render() {
    return (
      <div className="wrapper">
        <div >{this.props.id}</div>
        <div >here query id{this.props.queryId}</div>
        <div >here query text{this.props.text}</div>

        <button onClick={this.props.handleClick}>Change Id</button>

      </div>
    )
  }
}

