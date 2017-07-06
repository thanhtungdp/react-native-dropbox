import React, { Component, PropTypes } from "react";
import styled from "styled-components/native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { ButtonInline, NavbarBack } from "../components/elements";
import Screen from "../components/layouts/Screen";
import FileItem from "../components/file/FileItem";
import filesData from "../fake-data/files";
import ModalUpload from "./ModalUpload";

const ScrollView = styled.ScrollView`
  flex: 1;
`;

export default class Dashboard extends Component {
  state = {
    files: filesData,
    isUpload: false
  };

  handleUploadFile(fileUpload) {
    this.setState({
      files: [fileUpload, ...this.state.files]
    });
    this.toggleUpload();
  }

  toggleUpload() {
    this.setState({ isUpload: !this.state.isUpload });
  }

  render() {
    return (
      <Screen backgroundColor="#ffffff">
        <NavbarBack
          onBack={() => this.props.navigation.goBack(null)}
          title="Dashboard"
        />
        <ScrollView contentContainerStyle={{ paddingVertical: 10 }}>
          {this.state.files.map(file => <FileItem key={file.id} {...file} />)}
        </ScrollView>
        <ButtonInline onPress={this.toggleUpload.bind(this)}>
          <SimpleLineIcons name="cloud-upload" size={18} /> Upload file
        </ButtonInline>
        <ModalUpload
          isShow={this.state.isUpload}
          onBack={this.toggleUpload.bind(this)}
          onSubmit={this.handleUploadFile.bind(this)}
        />
      </Screen>
    );
  }
}
