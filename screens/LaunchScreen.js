import React, { Component, PropTypes } from "react";
import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";
import Screen from "../components/layouts/Screen";
import { LogoDefault, SettingItem } from "../components/elements";
import Colors from "../themes/colors";

const LogoWrapper = styled.View`
  flex: 2;
  justify-content: center;
  align-items: center;
`;

const HeaderTitle = styled.Text`
  font-size: 25;
  color: ${Colors.primary};
`;

const InfoWrapper = styled.View`
  flex: 1;
`;

export default class LaunchScreen extends Component {
  render() {
    return (
      <Screen>
        <LogoWrapper>
          <Animatable.Text
            animation="pulse"
            easing="ease-out"
            iterationCount="infinite"
            duration={2000}
            style={{ textAlign: "center" }}
          >
            <LogoDefault size={150} />
          </Animatable.Text>
          <HeaderTitle>Save your life</HeaderTitle>
        </LogoWrapper>
        <InfoWrapper>
          <SettingItem
            onPress={() => this.props.navigation.navigate("Login")}
            name="Sign in"
            first
          />
          <SettingItem
            onPress={() => this.props.navigation.navigate("Register")}
            name="Register"
          />
        </InfoWrapper>
      </Screen>
    );
  }
}
