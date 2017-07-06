import React, { Component, PropTypes } from "react";
import styled from "styled-components/native";
import { SimpleLineIcons } from "@expo/vector-icons";

const SettingItemWrapper = styled.TouchableOpacity`
  background-color: #ffffff;
  border-top-width: ${props => (props.first ? 1 : 0)};
  border-bottom-width: 1;
  border-color: #eeeeee;
  paddingHorizontal: 20;
  paddingVertical: 15;
  flex-direction: row;
  justify-content: space-between;
`;

const Text = styled.Text`
  color: #333333;
  font-size: 16;
`;

export default function SettingItem(props) {
  return (
    <SettingItemWrapper onPress={props.onPress} first={props.first}>
      <Text>{props.name}</Text>
      <SimpleLineIcons size={18} color="#d4d4d4" name="arrow-right" />
    </SettingItemWrapper>
  );
}
SettingItem.propTypes = {
  name: PropTypes.string,
  first: PropTypes.bool,
  onPress: PropTypes.func
};
