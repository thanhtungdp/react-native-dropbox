import React from "react";
import { StackNavigator } from "react-navigation";
import { StyleSheet, Text, View } from "react-native";

import LaunchScreen from "./screens/LaunchScreen";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Dashboard from "./screens/Dashboard";

const AppNavigation = new StackNavigator(
  {
    LaunchScreen: {
      screen: LaunchScreen
    },
    Login: {
      screen: Login
    },
    Register: {
      screen: Register
    },
	  Dashboard: {
		  screen: Dashboard
	  },
  },
  {
    headerMode: "none"
  }
);

export default AppNavigation;
