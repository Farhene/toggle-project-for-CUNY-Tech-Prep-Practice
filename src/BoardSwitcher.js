import React from 'react';

class Board extends React.Component {
  render() {
    let className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
}


class BoardSwitcher extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected: 0, //setting initial value
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  setToBoard(selected){
    this.setState({
      selected: selected
    });
  }
  
  handleToggle() {
    if(this.state.selected + 1 === this.props.numBoards){
      this.state.selected = 0;
      this.setToBoard(this.state.selected);
    }
    else{
      this.state.selected = this.state.selected + 1;
      this.setToBoard(this.state.selected);
    }
  }

  render() {
    let boards = [];
    for (let i = 0; i < this.props.numBoards; i++) {
      let isSelected = i === this.state.selected;
      boards.push( <Board index={i} selected={isSelected} key={i} />);
    }
    
    return (
      <div>
        <div className="boards">{boards}</div>
        
        <button onClick={() => this.handleToggle()} > Toggle! </button>
      </div>
    );
  }
}

export default BoardSwitcher;
