import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "react-native-elements";
import { useState } from "react";

const Question = ({ id, answer, options, question }) => {
  const [score, setScore] = useState(0);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 30,
        }}
      >
        {question}
      </Text>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "#edede9",
          flexDirection: "row",
          alignItems: "center",
          margin: 5,
        }}
        onPress={() => {
          answer === options[0] ? setScore((prev) => prev + 1) : null;
          console.log(score);
        }}
      >
        <Image
          source={require("../images/a.png")}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Text style={styles.quizText}>{options[0]}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "#edede9",
          flexDirection: "row",
          alignItems: "center",
          margin: 5,
        }}
        onPress={() => {
          answer === options[1] ? setScore((prev) => prev + 1) : null;
          console.log(score);
        }}
      >
        <Image
          source={require("../images/b.png")}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Text style={styles.quizText}>{options[1]}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "#edede9",
          flexDirection: "row",
          alignItems: "center",
          margin: 5,
        }}
        onPress={() => {
          answer === options[2] ? setScore((prev) => prev + 1) : null;
          console.log(score);
        }}
      >
        <Image
          source={require("../images/c.png")}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Text style={styles.quizText}>{options[2]}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          padding: 10,
          backgroundColor: "#edede9",
          flexDirection: "row",
          alignItems: "center",
          margin: 5,
        }}
        onPress={() => {
          answer === options[3] ? setScore((prev) => prev + 1) : null;
          console.log(score);
        }}
      >
        <Image
          source={require("../images/d.png")}
          style={{ width: 20, height: 20, marginRight: 10 }}
        />
        <Text style={styles.quizText}>{options[3]}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Question;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: "5%",
    backgroundColor: "white",
    margin: 20,
  },
  quizText: {
    fontSize: 20,
  },
});
