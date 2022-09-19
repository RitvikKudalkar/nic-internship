import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Input, Image, Button, Icon } from "react-native-elements";
import { Fumi } from "react-native-textinput-effects";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    console.log(password);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ImageBackground
        source={require("../images/gradient.jpg")}
        style={{
          height: Dimensions.get("window").height / 1.9,
        }}
      >
        <View style={styles.brandView}>
          <Image
            source={{
              uri: "https://static.javatpoint.com/fullformpages/images/nic.png",
            }}
            style={{ width: 120, height: 50 }}
          />
        </View>
      </ImageBackground>
      <View style={styles.bottomView}>
        <View style={{ padding: 30 }}></View>
      </View>
      <View
        style={{
          marginTop: 10,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "30%",
        }}
      >
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
            value={email}
            onChangeText={(text) => setEmail(text)}
          />

          <Fumi
            label={"Password"}
            iconClass={FontAwesomeIcon}
            iconName={"lock"}
            iconColor={"black"}
            iconSize={26}
            iconWidth={40}
            inputPadding={16}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <Button title="Login" onPress={signIn} containerStyle={styles.button} />
        <Button
          title="Register"
          onPress={() => {
            navigation.navigate("Register");
          }}
          containerStyle={styles.button}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  textInput: {
    width: 10,
    borderBottomWidth: 0,
  },
  inputView: {
    width: "70%",
  },
  button: {
    width: "70%",
    marginTop: 10,
  },

  brandView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  brandViewText: {
    color: "#fff",
    fontSize: 40,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
  bottomView: {
    justifyContent: "center",
    backgroundColor: "white",
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
});
