import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Square from '../Square';

import styles from './styles.module.scss';

class Board extends Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={this.props.onClick}
        squareNumber={i}
        key={i.toString()}
      />
    );
  }

  render() {
    return (
      <div>
        {this.createBoard()}
      </div>
    );
  }

  createBoard() {
    const board = [];
    let sqNumber = 0;

    for (let row = 0; row < 3; row++) {
      const squares = [];

      for (let col = 0; col < 3; col++) {
        squares.push(this.renderSquare(sqNumber));
        sqNumber++;
      }

      board.push(
        <div
          className={styles.boardRow}
          key={sqNumber.toString()}
        >
          { squares }
        </div>
      );
    }

    return board;
  }
}

Board.propTypes = {
  squares: PropTypes.arrayOf(PropTypes.string),
  onClick: PropTypes.func
};

export default Board;
