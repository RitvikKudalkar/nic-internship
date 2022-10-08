import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import React, { useEffect, useLayoutEffect, useState } from "react";
import CountDown from "react-native-countdown-component";
import { TouchableWithoutFeedback } from "react-native";
import { LogBox } from "react-native";

import firebase from "../firebase";

const questions = [
  {
    id: 1,
    question:
      "Near a pedestrian crossing, when the pedestrians are waiting to cross the road, you should",
    options: [
      "Slow down, sound horn and pass",
      "Stop the vehicle and wait till the pedestrians cross the road and then proceed",
      "Sound horn and proceed",
      "None of above.",
    ],
    answer: 1,
  },
  {
    id: 2,
    question:
      "You are approaching a narrow bridge,  another    vehicle is about to enter the bridge from opposite side you should ",
    options: [
      "Increase the speed and try to cross the bridge as  fast as  possible",
      "Put on the head light and pass the bridge",
      "Wait till the other vehicle crosses the bridge and  then proceed",
      "None of the above",
    ],
    answer: 3,
  },
  {
    id: 3,
    question: "How can you distinguish a transport vehicle.",
    options: [
      "By looking at the tyre size.",
      "By colour of the vehicle.",
      "By looking at the number plate of the vehicle.",
      "unknown",
    ],
    answer: 3,
  },
  {
    id: 4,
    question: "How can you distinguish a transport vehicle.",
    options: [
      "By looking at the tyre size.",
      "By colour of the vehicle.",
      "By looking at the number plate of the vehicle.",
      "unknown",
    ],
    answer: 3,
  },
];

const Quiz = ({ navigation }) => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [btnBackground, setBtnBackgroud] = useState(undefined);
  const [wrongOption, setWrongOption] = useState(0);
  const [optionsDisabled, setOptionsDisabled] = useState(false);
  const answerIndex = questions[counter].answer - 1;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setBtnBackgroud(undefined);
        console.log(questions[counter].options[answerIndex]);
      }}
    >
      <View style={styles.container}>
        <View style={styles.topView}>
          <Text style={{ color: "#7895B2", fontFamily: "Poppins-Regular" }}>
            Question {counter + 1}/20
          </Text>
          <Text
            style={{
              color: "#7895B2",
              marginTop: 5,
              fontSize: 20,
              fontWeight: "500",
              fontFamily: "Poppins-ExtraBold",
            }}
          >
            {questions[counter].question}
          </Text>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity
            disabled={optionsDisabled}
            activeOpacity={0.6}
            onPress={() => {
              questions[counter].options[0] ===
              questions[counter].options[answerIndex]
                ? setBtnBackgroud(1)
                : setWrongOption(1);
              setOptionsDisabled(true);
              setTimeout(() => {
                setCounter(counter + 1);
                setBtnBackgroud(undefined);
                setWrongOption(0);
                setOptionsDisabled(false);
              }, 2000);
            }}
            style={[
              {
                backgroundColor:
                  btnBackground === 1
                    ? "#D3E4CD"
                    : wrongOption === 1
                    ? "#F96666"
                    : "#FEF5ED",
              },
              styles.button,
              {
                borderColor:
                  btnBackground === 1
                    ? "#ADC2A9"
                    : wrongOption === 1
                    ? "#CD104D"
                    : "white",
              },
            ]}
          >
            <Text style={[{ color: "black" }, styles.buttonText]}>
              {questions[counter].options[0]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={optionsDisabled}
            activeOpacity={0.6}
            onPress={() => {
              questions[counter].options[1] ===
              questions[counter].options[answerIndex]
                ? setBtnBackgroud(2)
                : setWrongOption(2);
              setOptionsDisabled(true);
              setTimeout(() => {
                setCounter(counter + 1);
                setBtnBackgroud(undefined);
                setWrongOption(0);
                setOptionsDisabled(false);
              }, 2000);
            }}
            style={[
              {
                backgroundColor:
                  btnBackground === 2
                    ? "#D3E4CD"
                    : wrongOption === 2
                    ? "#F96666"
                    : "#FEF5ED",
              },
              styles.button,
              {
                borderColor:
                  btnBackground === 2
                    ? "#ADC2A9"
                    : wrongOption === 2
                    ? "#CD104D"
                    : "white",
              },
            ]}
          >
            <Text style={[{ color: "black" }, styles.buttonText]}>
              {questions[counter].options[1]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={optionsDisabled}
            activeOpacity={0.6}
            onPress={() => {
              questions[counter].options[2] ===
              questions[counter].options[answerIndex]
                ? setBtnBackgroud(3)
                : setWrongOption(3);
              setOptionsDisabled(true);
              setTimeout(() => {
                setCounter(counter + 1);
                setBtnBackgroud(undefined);
                setWrongOption(0);
                setOptionsDisabled(false);
              }, 2000);
            }}
            style={[
              {
                backgroundColor:
                  btnBackground === 3
                    ? "#D3E4CD"
                    : wrongOption === 3
                    ? "#F96666"
                    : "#FEF5ED",
              },
              styles.button,
              {
                borderColor:
                  btnBackground === 3
                    ? "#ADC2A9"
                    : wrongOption === 3
                    ? "#CD104D"
                    : "white",
              },
            ]}
          >
            <Text style={[{ color: "black" }, styles.buttonText]}>
              {questions[counter].options[2]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={optionsDisabled}
            activeOpacity={0.6}
            onPress={() => {
              questions[counter].options[3] ===
              questions[counter].options[answerIndex]
                ? setBtnBackgroud(4)
                : setWrongOption(4);
              setOptionsDisabled(true);
              setTimeout(() => {
                setCounter(counter + 1);
                setBtnBackgroud(undefined);
                setWrongOption(0);
                setOptionsDisabled(false);
              }, 2000);
            }}
            style={[
              {
                backgroundColor:
                  btnBackground === 4
                    ? "#D3E4CD"
                    : wrongOption === 4
                    ? "#EE6983"
                    : "#F5EFE6",
              },
              styles.button,
              {
                borderColor:
                  btnBackground === 4
                    ? "#ADC2A9"
                    : wrongOption === 4
                    ? "#CD104D"
                    : "white",
              },
            ]}
          >
            <Text style={[{ color: "black" }, styles.buttonText]}>
              {questions[counter].options[3]}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#AEBDCA",
  },

  topView: {
    width: "100%",
    height: 300,
    backgroundColor: "#F5EFE6",
    paddingTop: 60,
    paddingLeft: 24,
  },
  bottomView: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 50,
  },
  button: {
    width: 310,
    borderWidth: 1,

    borderRadius: 5,
    paddingVertical: 15,
    paddingLeft: 20,
    marginVertical: 5,
  },
  buttonText: {
    fontWeight: "550",
    fontSize: 17,
    fontFamily: "Poppins-SemiBold",
    color: "#7895B2",
  },
});
