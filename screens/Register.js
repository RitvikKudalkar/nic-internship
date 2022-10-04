import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { Button } from "react-native-elements";
import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Register = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.view}>
        <Text>Register Here</Text>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5EFE6",
    height: "100%",
  },
  inputView: {
    width: "70%",
  },
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    width: "70%",
    marginTop: 10,
  },
  view: {
    width: "100%",
    height: 300,
    paddingTop: 100,
    paddingLeft: 24,
    backgroundColor: "white",
  },
});
