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
import { LinearGradient } from "expo-linear-gradient";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = () => {
    console.log(password);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={{ padding: 200, backgroundColor: "#AEBDCA" }}>
        <View style={styles.brandView}>
          <Text
            style={{
              fontSize: 30,
              color: "white",
            }}
          ></Text>
        </View>
      </View>
      <View style={styles.bottomView}>
        <View style={{ padding: 0 }}>
          <Text
            style={{
              fontSize: 28,
              marginLeft: 65,
              marginTop: 40,
              fontWeight: "600",
            }}
          >
            Welcome Back
          </Text>
          <Text
            style={{
              marginLeft: 65,
              marginTop: 5,
            }}
          >
            Good to see you back!
          </Text>
        </View>
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
            iconColor={"#7895B2"}
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
            iconColor={"#7895B2"}
            iconSize={26}
            iconWidth={40}
            inputPadding={16}
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        {/* <Button title="Login" onPress={signIn} containerStyle={styles.button} />
        <Button
          title="Register"
          color="#ff5c5c"
          onPress={() => {
            navigation.navigate("Register");
          }}
          containerStyle={styles.button}
        /> */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            navigation.navigate("Register");
          }}
        >
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>
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
    alignItems: "center",
    backgroundColor: "#7895B2",
    padding: 10,
    width: "70%",
    marginTop: 20,
    borderRadius: 6,
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
    backgroundColor: "white",
    bottom: 50,
    borderTopStartRadius: 60,
    borderTopEndRadius: 60,
  },
  buttonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "500",
  },
});
