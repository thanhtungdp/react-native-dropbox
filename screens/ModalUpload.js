import React, { Component, PropTypes } from "react";
import { Modal, Picker } from "react-native";
import styled from "styled-components/native";
import { ButtonInline, NavbarBack, InputInline } from "../components/elements";
import Screen from "../components/layouts/Screen";

const Clearfix = styled.View`
  height: 8;
`;

export default class ModalUpload extends Component {
  static propTypes = {
    isShow: PropTypes.bool,
    onSubmit: PropTypes.func,
	  onBack: PropTypes.func
  };

  state = {
    type: "folder",
    name: ""
  };

  handleChangeType(itemValue) {
    this.setState({ type: itemValue });
  }

  handleChangeFileName(value) {
    this.setState({ name: value });
  }

  handlePressUpload() {
    if (!this.state.name) {
      alert("Please fill name");
      return;
    }
    this.props.onSubmit({
      id: (new Date()).toString(),
      type: this.state.type,
      name: this.state.name,
      createdAt: new Date()
    });
    this.setState({
    	name: ''
    })
  }

  render() {
    return (
      <Modal visible={this.props.isShow} animationType="slide">
        <Screen>
          <NavbarBack
            title="Upload file"
            onBack={this.props.onBack}
          />
          <Clearfix />
          <InputInline
            label="File name"
            placeholder="Your file name"
            onChangeText={this.handleChangeFileName.bind(this)}
            value={this.state.name}
            first
          />
          <Picker
            selectedValue={this.state.type}
            onValueChange={this.handleChangeType.bind(this)}
          >
            <Picker.Item label="Folder" value="folder" />
            <Picker.Item label="Text" value="text" />
            <Picker.Item label="Word" value="word" />
            <Picker.Item label="Picture" value="picture" />
          </Picker>
          <Clearfix />
          <ButtonInline onPress={this.handlePressUpload.bind(this)}>
            Upload file
          </ButtonInline>
        </Screen>
      </Modal>
    );
  }
}
