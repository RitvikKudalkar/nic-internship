import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  TouchableHighlight,
} from "react-native";
import { Image, Button } from "react-native-elements";
import React, { useState } from "react";
import Question from "../components/Question";
import CountDown from "react-native-countdown-component";

const Quiz = ({ navigation }) => {
  const questions = [
    {
      id: 1,
      question: "What is the captial of india",
      options: ["Goa", "delhi", "rajasthan", "iGujrat"],
      answer: "delhi",
    },
    {
      id: 2,
      question: "who is the prime minister of india ",
      options: [
        "narendra Modi",
        "Amit shah",
        "Pramod Sawant",
        "Arwind Kejriwal",
      ],
      answer: "narendra Modi",
    },
    {
      id: 3,
      question: "what is ur name",
      options: ["ritvik", "bitvik", "haha", "unknown"],
      answer: "ritvik",
    },
  ];

  const [counter, setCounter] = useState(0);

  const [btnBackground1, setBtnBackgroud1] = useState(false);

  const [btnBackground2, setBtnBackgroud2] = useState(false);

  const [btnBackground3, setBtnBackgroud3] = useState(false);

  const [btnBackground4, setBtnBackgroud4] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Text style={{ color: "#A7895B2" }}>Question {counter + 1}/20</Text>
        <Text
          style={{
            color: "black",
            marginTop: 10,
            fontSize: 23,
            fontWeight: "400",
          }}
        >
          {questions[counter].question}
        </Text>
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            setBtnBackgroud1(true);
            setBtnBackgroud2(false);
            setBtnBackgroud3(false);
            setBtnBackgroud4(false);
          }}
          style={[
            { backgroundColor: btnBackground1 ? "#F5EFE6" : "#7895B2" },
            styles.button,
          ]}
        >
          <Text
            style={[
              { color: btnBackground1 ? "#7895B2" : "white" },
              styles.buttonText,
            ]}
          >
            {questions[counter].options[0]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            setBtnBackgroud1(false);
            setBtnBackgroud2(true);
            setBtnBackgroud3(false);
            setBtnBackgroud4(false);
          }}
          style={[
            { backgroundColor: btnBackground2 ? "#F5EFE6" : "#7895B2" },
            styles.button,
          ]}
        >
          <Text
            style={[
              { color: btnBackground2 ? "#7895B2" : "white" },
              styles.buttonText,
            ]}
          >
            {questions[counter].options[1]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            setBtnBackgroud1(false);
            setBtnBackgroud2(false);
            setBtnBackgroud3(true);
            setBtnBackgroud4(false);
          }}
          style={[
            { backgroundColor: btnBackground3 ? "#F5EFE6" : "#7895B2" },
            styles.button,
          ]}
        >
          <Text
            style={[
              { color: btnBackground3 ? "#7895B2" : "white" },
              styles.buttonText,
            ]}
          >
            {questions[counter].options[2]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            setBtnBackgroud1(false);
            setBtnBackgroud2(false);
            setBtnBackgroud3(false);
            setBtnBackgroud4(true);
          }}
          style={[
            { backgroundColor: btnBackground4 ? "#F5EFE6" : "#7895B2" },
            styles.button,
          ]}
        >
          <Text
            style={[
              { color: btnBackground4 ? "#7895B2" : "white" },
              styles.buttonText,
            ]}
          >
            {questions[counter].options[3]}
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row-reverse" }}>
          <TouchableOpacity
            style={{
              width: 100,
              backgroundColor: "black",
              borderWidth: 0.6,
              borderColor: "white",
              paddingVertical: 8,

              alignItems: "center",
              borderRadius: 5,
              marginTop: 40,
              marginRight: 5,
            }}
            onPress={() => {
              setCounter(counter + 1);
            }}
          >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              Next
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#7895B2",
  },

  topView: {
    width: "100%",
    height: 350,
    backgroundColor: "#F5EFE6",
    paddingTop: 60,
    paddingLeft: 24,
  },
  bottomView: {
    padding: 35,
  },
  button: {
    width: 310,
    borderWidth: 0.6,
    borderColor: "white",
    borderRadius: 5,
    paddingVertical: 15,
    paddingLeft: 20,
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: "550",
    fontSize: 20,
  },
});
