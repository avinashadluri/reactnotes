/* eslint-disable react/prop-types */
import React from "react";
import Note from './Note';
import * as Styles from "./Styles";

class LeftContainer extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: "none"
      };
    }
  
    render() {
      return (
        <Styles.LeftContainer>
          <Styles.LeftHeading>
            <Styles.LeftHeadingText>Your Notes</Styles.LeftHeadingText>
  
            {this.props.notes.length !== 0 &&
              this.props.notes.map((note, i) => (
                <Note
                  key={i}
                  note={note}
                  noteClicked={this.props.noteClicked}
                  deleteNote={this.props.deleteNote}
                />
              ))}
          </Styles.LeftHeading>
  
          <Styles.LeftNewNoteSection>
            <Styles.LeftNoteButton onClick={this.props.click}>
              New Note
            </Styles.LeftNoteButton>
          </Styles.LeftNewNoteSection>
        </Styles.LeftContainer>
      );
    }
  }

export default LeftContainer;