import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Image, Button } from "react-native-elements";
import React from "react";
import Question from "../components/Question";

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: "what is ur name",
      options: ["ritvik", "bitvik", "haha", "idk"],
      answer: "ritvik",
    },
    {
      id: 2,
      question: "what is ",
      options: ["ritvik", "bitvik", "haha", "bruh"],
      answer: "bitvik",
    },
    {
      id: 3,
      question: "what is ur name",
      options: ["ritvik", "bitvik", "haha", "unknown"],
      answer: "haha",
    },
  ];
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../images/gradient.jpg")}
        style={{ height: "100%", width: "100%", justifyContent: "center" }}
      >
        <View style={styles.innerContainer}>
          <Text style={{ fontSize: 30, marginBottom: 30 }}>
            {" "}
            Q {questions[1].question}
          </Text>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#edede9",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../images/a.png")}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <Text style={{ fontSize: 20 }}>{questions[0].options[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#edede9",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../images/b.png")}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <Text style={{ fontSize: 20 }}>{questions[0].options[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#edede9",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../images/c.png")}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <Text style={{ fontSize: 20 }}>{questions[0].options[0]}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              padding: 10,
              backgroundColor: "#edede9",
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../images/d.png")}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <Text style={{ fontSize: 20 }}>{questions[0].options[0]}</Text>
          </TouchableOpacity>
          <View
            style={{
              alignItems: "center",
              marginTop: 20,
              flexDirection: "row-reverse",
            }}
          >
            <Button title="Next" containerStyle={styles.button} />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  innerContainer: {
    justifyContent: "center",
    paddingVertical: 100,
    paddingHorizontal: 20,
    backgroundColor: "white",
    margin: 20,
    borderRadius: 20,
  },
  button: {
    width: 100,
    marginTop: 10,
    borderRadius: 10,
  },
});
