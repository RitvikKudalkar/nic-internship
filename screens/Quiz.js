import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import React, { useEffect, useState } from "react";
import CountDown from "react-native-countdown-component";
import { TouchableWithoutFeedback } from "react-native";
import { LogBox } from "react-native";

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
    answer:
      "Stop the vehicle and wait till the pedestrians cross the road and then proceed",
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
    answer: "Wait till the other vehicle crosses the bridge and  then proceed",
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
    answer: "By looking at the number plate of the vehicle.",
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
    answer: "By looking at the number plate of the vehicle.",
  },
];

const Quiz = ({ navigation }) => {
  const [counter, setCounter] = useState(0);
  const [score, setScore] = useState(0);
  const [btnBackground, setBtnBackgroud] = useState(undefined);
  const [wrongOption, setWrongOption] = useState(0);
  const [optionsDisabled, setOptionsDisabled] = useState(false);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setBtnBackgroud(undefined);
      }}
    >
      <View style={styles.container}>
        <View style={styles.topView}>
          <Text style={{ color: "#7895B2" }}>Question {counter + 1}/20</Text>
          <Text
            style={{
              color: "black",
              marginTop: 5,
              fontSize: 23,
              fontWeight: "500",
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
              questions[counter].options[0] === questions[counter].answer
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
                    ? "green"
                    : wrongOption === 1
                    ? "red"
                    : "#7895B2",
              },
              styles.button,
            ]}
          >
            <Text
              style={[
                { color: btnBackground === 1 ? "#7895B2" : "white" },
                styles.buttonText,
              ]}
            >
              {questions[counter].options[0]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={optionsDisabled}
            activeOpacity={0.6}
            onPress={() => {
              questions[counter].options[1] === questions[counter].answer
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
                    ? "green"
                    : wrongOption === 2
                    ? "red"
                    : "#7895B2",
              },
              styles.button,
            ]}
          >
            <Text
              style={[
                { color: btnBackground === 2 ? "#7895B2" : "white" },
                styles.buttonText,
              ]}
            >
              {questions[counter].options[1]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={optionsDisabled}
            activeOpacity={0.6}
            onPress={() => {
              questions[counter].options[2] === questions[counter].answer
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
                    ? "green"
                    : wrongOption === 3
                    ? "red"
                    : "#7895B2",
              },
              styles.button,
            ]}
          >
            <Text
              style={[
                { color: btnBackground === 3 ? "#7895B2" : "white" },
                styles.buttonText,
              ]}
            >
              {questions[counter].options[2]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={optionsDisabled}
            activeOpacity={0.6}
            onPress={() => {
              questions[counter].options[3] === questions[counter].answer
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
                    ? "green"
                    : wrongOption === 4
                    ? "red"
                    : "#7895B2",
              },
              styles.button,
            ]}
          >
            <Text
              style={[
                { color: btnBackground === 4 ? "#7895B2" : "white" },
                styles.buttonText,
              ]}
            >
              {questions[counter].options[3]}
            </Text>
          </TouchableOpacity>

          {/* <View>
            <TouchableOpacity
              activeOpacity={0.6}
              style={{
                width: 100,
                backgroundColor: "#F5EFE6",
                borderWidth: 0.6,
                borderColor: "white",
                paddingVertical: 8,
                alignItems: "center",
                borderRadius: 5,
                position: "absolute",
                top: 10,
                right: 0,
              }}
              onPress={() => {
                setTimeout(() => {
                  setCounter(counter + 1);
                }, 2000);

                setBtnBackgroud(undefined);
              }}
            >
              <Text
                style={{ color: "#7895B2", fontSize: 15, fontWeight: "500" }}
              >
                Next
              </Text>
            </TouchableOpacity>
          </View> */}
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
    backgroundColor: "#7895B2",
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
    borderColor: "white",
    borderRadius: 5,
    paddingVertical: 15,
    paddingLeft: 20,
    marginVertical: 5,
  },
  buttonText: {
    fontWeight: "550",
    fontSize: 20,
  },
});
