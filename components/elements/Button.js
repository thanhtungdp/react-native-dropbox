import React, { Component, PropTypes } from "react";
import styled from "styled-components/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from '../../themes/colors';

const ButtonWrappper = styled.TouchableOpacity`
  background-color: ${Colors.primary};
  paddingHorizontal: 20;
  paddingVertical: 15;
  flex-direction: row;
  justify-content: center;
`;

const Text = styled.Text`
  color: #ffffff;
  font-size: 18;
`;

export default function Button(props) {
	return (
		<ButtonWrappper onPress={props.onPress}>
			<Text>{props.children}</Text>
		</ButtonWrappper>
	);
}
Button.propTypes = {
	name: PropTypes.string,
	onPress: PropTypes.func
};
