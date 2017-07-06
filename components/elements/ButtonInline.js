import React, { Component, PropTypes } from "react";
import styled from "styled-components/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import Colors from '../../themes/colors';

const ButtonWrappper = styled.TouchableOpacity`
  background-color: #ffffff;
  border-top-width: 1;
  border-bottom-width: 1;
  border-color: #eeeeee;
  paddingHorizontal: 20;
  paddingVertical: 15;
  flex-direction: row;
  justify-content: center;
`;

const Text = styled.Text`
  color: #333333;
  font-size: 18;
  color: ${Colors.primary}
`;

export default function ButtonInline(props) {
	return (
		<ButtonWrappper onPress={props.onPress}>
			<Text>{props.children}</Text>
		</ButtonWrappper>
	);
}
ButtonInline.propTypes = {
	name: PropTypes.string,
	onPress: PropTypes.func
};
