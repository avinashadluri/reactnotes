/* eslint-disable react/prop-types */
import React from "react";
import * as Styles from "./Styles";

class RightContainer extends React.Component {
    render() {
      return (
        <Styles.RightWrapper>
          {this.props.showWelcomeMessage && (
            <Styles.RightOuterWrapper>
              <Styles.RightInnerWrapper>
                <p>Create or edit notes from the left section.</p>
                <br />
                <p>Notes are stored in localStorage.</p>
              </Styles.RightInnerWrapper>
            </Styles.RightOuterWrapper>
          )}
  
          {this.props.note !== null && (
            <Styles.RightNoteWrapper>
              <Styles.RightNoteInputHeader
                name="defaultTitle"
                onChange={this.props.handleChange.bind(this, this.props.id)}
                value={this.props.note.title}
                maxLength="10"
                placeholder="Heading here"
              />
              <Styles.RightNoteInputDescription
                name="defaultContent"
                value={this.props.note.content}
                onChange={this.props.handleChange.bind(this, this.props.id)}
                maxLength="500"
                placeholder="Description here"
              ></Styles.RightNoteInputDescription>
            </Styles.RightNoteWrapper>
          )}
  
          {this.props.showNewNoteDiv && (
            <Styles.RightNoteWrapper>
              <Styles.RightNoteInputHeader
                name="defaultTitle"
                onChange={this.props.handleChange.bind(this, this.props.id)}
                value={this.props.default.title}
                maxLength="10"
                placeholder="Heading here"
              />
              <Styles.RightNoteInputDescription
                name="defaultContent"
                value={this.props.default.content}
                onChange={this.props.handleChange.bind(this, this.props.id)}
                maxLength="500"
                placeholder="Description here"
              ></Styles.RightNoteInputDescription>
            </Styles.RightNoteWrapper>
          )}
        </Styles.RightWrapper>
      );
    }
  }

export default RightContainer;
