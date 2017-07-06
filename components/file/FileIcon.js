import React, { PropTypes } from "react";
import styled from "styled-components/native";

const Icons = {
  folder: require("../../assets/icons/folder.png"),
  picture: require("../../assets/icons/filePicture.png"),
  text: require("../../assets/icons/fileText.png"),
  word: require("../../assets/icons/fileWord.png")
};

function getIcon(type) {
  if (Icons[type]) return Icons[type];
  else return Icons.text;
}

const ImageIcon = styled.Image`
  width: 40;
  height: 40;
`;

export default function FileIcon({ type }) {
	return <ImageIcon source={getIcon(type)} resizeMode="contain"/>
}

FileIcon.propTypes = {
  type: PropTypes.oneOf(["folder", "picture", "text", "word"])
};
