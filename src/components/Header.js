/* eslint-disable react/prop-types */
import React from "react";
import * as Styles from "./Styles";

class Header extends React.Component {
    render() {
      return (
        <Styles.HeaderWrapper>
          <Styles.HeaderText>React Notes</Styles.HeaderText>
        </Styles.HeaderWrapper>
      );
    }
}

export default Header;