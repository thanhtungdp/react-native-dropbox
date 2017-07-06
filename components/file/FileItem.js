import React, { Component, PropTypes } from "react";
import styled from "styled-components/native";
import Colors from '../../themes/colors';
import FileIcon from "./FileIcon";

const FileItemWrapper = styled.View`
  flex-direction: row;
  paddingHorizontal: 15;
  paddingVertical: 10;
`;

const IconWrapper = styled.View`
  width: 50;
`;

const InfoWrapper = styled.View`
  flex: 1;
`;

const LabelTitle = styled.Text`
  font-size: 18;
  color: #333;
`;

const Cleafix = styled.View`
  height: 4;
`

const LabelDescription = styled.Text`
  font-size: 14;
  color: ${Colors.textDescription}
`

export default function FileItem(props) {
  return (
    <FileItemWrapper>
      <IconWrapper>
        <FileIcon type={props.type} />
      </IconWrapper>
      <InfoWrapper>
        <LabelTitle>{props.name}</LabelTitle>
	      <Cleafix />
	      <LabelDescription>{props.createdAt.toString()}</LabelDescription>
      </InfoWrapper>
    </FileItemWrapper>
  );
}
FileItem.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  createdAt: PropTypes.any
};
