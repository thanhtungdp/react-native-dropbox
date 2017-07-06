import React, { PropTypes } from "react";
import { TouchableOpacity } from "react-native";
import Navbar from "./Navbar";
import { SimpleLineIcons } from "@expo/vector-icons";

const IconBack = ({ onPress, iconName = "arrow-left" }) => (
  <TouchableOpacity onPress={onPress}>
    <SimpleLineIcons color="#3498db" size={20} name={iconName} />
  </TouchableOpacity>
);

export default function NavbarBack({ iconName, onBack, ...props }) {
  return (
    <Navbar
      left={<IconBack iconName={iconName} onPress={onBack} />}
      {...props}
    />
  );
}
NavbarBack.propTypes = {
  onBack: PropTypes.func,
  iconName: PropTypes.string
};
