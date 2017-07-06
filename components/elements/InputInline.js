import React, { Component, PropTypes } from "react";
import styled from "styled-components/native";

const InputInlineWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  paddingVertical: 10;
  paddingHorizontal: 15;
  background-color: #fff;
  border-top-width: ${props => (props.first ? 1 : 0)};
  border-bottom-width: 1;
  border-color: #eee;
`;

const LabelWrapper = styled.View`
  width: 100;
`;

const Label = styled.Text`
  font-size: 16;
`;

const Input = styled.TextInput`
  height: 30;
  flex: 1;
`;

export default function InputInline(props) {
  return (
    <InputInlineWrapper first={props.first}>
      <LabelWrapper>
        <Label>{props.label}</Label>
      </LabelWrapper>
      <Input placeholder={props.placeholder} {...props} />
    </InputInlineWrapper>
  );
}
InputInline.propTypes = {
  first: PropTypes.bool,
  label: PropTypes.string,
  placeholder: PropTypes.string
};
