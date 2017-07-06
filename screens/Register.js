import React, { Component, PropTypes } from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import { InputInline, Clearfix, ButtonInline } from "../components/elements";

export default class Register extends Component {
  render() {
    return (
      <AuthLayout
        title="Register"
        onBack={() => this.props.navigation.goBack(null)}
      >
        <InputInline first label="First Name" placeholder="Tung" />
        <InputInline label="Last Name" placeholder="Phan" />
        <InputInline label="Email" placeholder="Email address" />
        <InputInline label="Password" placeholder="Required" />
        <Clearfix height={16} />
        <ButtonInline
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          Register
        </ButtonInline>
      </AuthLayout>
    );
  }
}
