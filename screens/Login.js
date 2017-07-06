import React, { Component, PropTypes } from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import { InputInline, ButtonInline, Clearfix } from "../components/elements";

export default class Login extends Component {
  render() {
    return (
      <AuthLayout
        title="Login"
        onBack={() => this.props.navigation.goBack(null)}
      >
        <InputInline first label="Email" placeholder="Email address" />
        <InputInline label="Password" placeholder="Required" />
        <Clearfix height={16} />
        <ButtonInline
          onPress={() => this.props.navigation.navigate("Dashboard")}
        >
          Login
        </ButtonInline>
      </AuthLayout>
    );
  }
}
