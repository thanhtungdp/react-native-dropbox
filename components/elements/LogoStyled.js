import React, { PropTypes } from "react";
import styled from "styled-components/native";

const Image = styled.Image`
	${props => `
		width: ${props.size};
		height: ${props.size};
		resizeMode: contain;
	`}
`;

export default function Logo(props) {
  return <Image size={props.size} source={require("../../assets/logo.png")} />;
}

Logo.propTypes = {
  size: PropTypes.number
};
