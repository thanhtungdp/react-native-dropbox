import React, { Component, PropTypes } from "react";
import styled from "styled-components/native";
import Screen from "./Screen";
import NavbarBack from "../elements/NavbarBack";

const Container = styled.View`
  paddingVertical: 20;
`;

export default class AuthLayout extends Component {
  static propTypes = {
  	title: PropTypes.string,
  	onBack: PropTypes.func,
  };

  render() {
    return (
      <Screen>
        <NavbarBack
          title={this.props.title}
          onBack={this.props.onBack}
        />
        <Container>
	        {this.props.children}
        </Container>
      </Screen>
    );
  }
}
