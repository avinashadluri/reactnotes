/* eslint-disable react/prop-types */
import React from "react";
import WarningModal from './WarningModal';
import * as Styles from "./Styles";

class Note extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: "none",
        showWarning: false
      };
    }
  
    onmouseenter() {
      this.setState({
        display: "inline"
      });
    }
  
    onmouseleave() {
      this.setState({
        display: "none"
      });
    }
  
    handleClick(e) {
      console.log(e);
      e.stopPropagation();
      this.setState({
        showWarning: true
      });
    }
  
    handleDeleteClick(id, p, e) {
      console.log(arguments);
      //e.stopPropagation();
      this.props.deleteNote(id, e);
      this.setState({
        showWarning: false
      });
    }
  
    handleCancelClick(e) {
      e.stopPropagation();
      this.setState({
        showWarning: false
      });
    }
  
    render() {
      const { note } = this.props;
      return (
        <Styles.LeftNoteTitleWrapper
          onClick={this.props.noteClicked.bind(this, note.id)}
          onMouseEnter={this.onmouseenter.bind(this)}
          onMouseLeave={this.onmouseleave.bind(this)}
        >
          <span>{note.title}</span>
  
          <Styles.LeftNoteDeleteButton
            //onClick = {this.props.deleteNote.bind(this, note.id)}
            onClick={this.handleClick.bind(this)}
            delete={this.state.display}
          >
            Delete
          </Styles.LeftNoteDeleteButton>
  
          <WarningModal
            showWarning={this.state.showWarning}
            handleDeleteClick={this.handleDeleteClick.bind(this, note.id)}
            handleCancelClick={this.handleCancelClick.bind(this)}
          />
        </Styles.LeftNoteTitleWrapper>
      );
    }
}

export default Note;