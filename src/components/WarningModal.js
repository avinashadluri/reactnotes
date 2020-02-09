/* eslint-disable react/prop-types */
import React from "react";
import * as Styles from "./Styles";

class WarningModal extends React.Component {
    render() {
      return (
        <div>
          <Styles.DeleteModal showWarning={this.props.showWarning}>
            <Styles.DeleteText>
              Are you sure you want to delete this note?
            </Styles.DeleteText>
            <Styles.DeleteModalButton onClick={this.props.handleDeleteClick}>
              Delete
            </Styles.DeleteModalButton>
  
            <Styles.DeleteModalCancelButton
              onClick={this.props.handleCancelClick}
            >
              Cancel
            </Styles.DeleteModalCancelButton>
          </Styles.DeleteModal>
  
          {this.props.showWarning && <Styles.DeleteWarning />}
        </div>
      );
    }
}

export default WarningModal;
