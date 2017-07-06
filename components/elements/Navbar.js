import React, { PureComponent, PropTypes } from "react";
import styled from "styled-components/native";

const NavbarWrapper = styled.View`
  background-color: ${props => props.backgroundColor};
  height: 82;
  padding-top: 20;
  paddingHorizontal: 15;
  border-bottom-width: 1;
  border-color: #eee;
`;

const NavbarContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`;

const LeftComponent = styled.View`
  width: 50;
  background-color: transparent;
`;

const RightComponent = styled.View`
  width: 50;
  align-items: flex-end;
  background-color: transparent;
`;

const CenterComponent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
`;

const Title = styled.Text`
	font-size: 18;
	font-weight: 500;
	color: ${props => props.color}
`;

export default class Navbar extends PureComponent {
  static propTypes = {
    left: PropTypes.any,
    right: PropTypes.any,
    backgroundColor: PropTypes.any,
    textColor: PropTypes.any,
    title: PropTypes.any,
    isTitleText: PropTypes.bool
  };

  static defaultProps = {
    backgroundColor: "#ffffff",
    textColor: "#333",
    isTitleText: true
  };

  render() {
    return (
      <NavbarWrapper backgroundColor={this.props.backgroundColor}>
        <NavbarContainer>
          <LeftComponent>{this.props.left}</LeftComponent>
          <CenterComponent>
            {this.props.isTitleText &&
              <Title color={this.props.textColor}>
                {this.props.title}
              </Title>}
            {!this.props.isTitleText ? this.props.title : null}
          </CenterComponent>
          <RightComponent>{this.props.right}</RightComponent>
        </NavbarContainer>
      </NavbarWrapper>
    );
  }
}
