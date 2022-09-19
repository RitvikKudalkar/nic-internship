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
      <ImageBackground
        source={require("../images/gradient.jpg")}
        style={{ height: "100%", width: "100%" }}
      >
        <View style={styles.inputContainer}>
          <View style={styles.inputView}>
            <Fumi
              label={"Email"}
              iconClass={FontAwesomeIcon}
              iconName={"envelope"}
              iconColor={"black"}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              style={{ marginBottom: 10 }}
            />

            <Fumi
              label={"Phone Number"}
              iconClass={FontAwesomeIcon}
              iconName={"lock"}
              iconColor={"black"}
              iconSize={26}
              iconWidth={40}
              inputPadding={16}
              secureTextEntry={true}
              style={{ marginBottom: 10 }}
            />
            <Fumi
              label={"Password"}
              iconClass={FontAwesomeIcon}
              iconName={"envelope"}
              iconColor={"black"}
              iconSize={20}
              iconWidth={40}
              inputPadding={16}
              style={{ marginBottom: 10 }}
            />

            <Fumi
              label={"Confirm Password"}
              iconClass={FontAwesomeIcon}
              iconName={"lock"}
              iconColor={"black"}
              iconSize={26}
              iconWidth={40}
              inputPadding={16}
              secureTextEntry={true}
            />
          </View>
          <Button
            title="Register"
            containerStyle={styles.button}
            onPress={() => {
              navigation.navigate("Quiz");
            }}
          />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
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
});
