import React, { useEffect, useState } from "react";
import type { PropsWithChildren } from "react";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  ImageBackground,
  ImageSourcePropType,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import DiceOne from "../assets/images/One.png";
import DiceTwo from "../assets/images/Two.png";
import DiceThree from "../assets/images/Three.png";
import DiceFour from "../assets/images/Four.png";
import DiceFive from "../assets/images/Five.png";
import DiceSix from "../assets/images/Six.png";

import bgOne from "../assets/images/backgroundOne.jpg";
import bgTwo from "../assets/images/backgroundTwo.jpg";
import bgThree from "../assets/images/backgroundThree.jpg";

type DiceProps = PropsWithChildren<{
  imageUrl: ImageSourcePropType;
}>;

const Dice = ({ imageUrl }: DiceProps): JSX.Element => {
  return (
    <View style={styles.diceContainer}>
      <Image source={imageUrl} style={styles.diceImage} />
    </View>
  );
};

export default function App() {
  const [diceImageOne, setDiceImageOne] =
    useState<ImageSourcePropType>(DiceOne);
  const [diceImageTwo, setDiceImageTwo] =
    useState<ImageSourcePropType>(DiceThree); // * SECOND DICE;

  const [randomBg, setRandomBg] = useState<ImageSourcePropType>(bgOne);

  const generateDiceOne = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    // ! UPADTES IMAGE TO WHICHEVER NUMBER IS GENERATED
    switch (randomNumber) {
      case 1:
        setDiceImageOne(DiceOne);
        break;
      case 2:
        setDiceImageOne(DiceTwo);
        break;
      case 3:
        setDiceImageOne(DiceThree);
        break;
      case 4:
        setDiceImageOne(DiceFour);
        break;
      case 5:
        setDiceImageOne(DiceFive);
        break;
      case 6:
        setDiceImageOne(DiceSix);
        break;
      default:
        setDiceImageOne(DiceOne);
    }
  };
  const generateDiceTwo = () => {
    let randomNumber = Math.floor(Math.random() * 6) + 1;

    // ! UPADTES IMAGE TO WHICHEVER NUMBER IS GENERATED
    switch (randomNumber) {
      case 1:
        setDiceImageTwo(DiceOne);
        break;
      case 2:
        setDiceImageTwo(DiceTwo);
        break;
      case 3:
        setDiceImageTwo(DiceThree);
        break;
      case 4:
        setDiceImageTwo(DiceFour);
        break;
      case 5:
        setDiceImageTwo(DiceFive);
        break;
      case 6:
        setDiceImageOne(DiceSix);
        break;
      default:
        setDiceImageTwo(DiceOne);
    }
  };

  const rollDiceOnTap = () => {
    generateDiceOne();
    generateDiceTwo();
  };

  // * SET ANOTHER FUNCTION TO HANDLE SECOND DICE AND ANOTHER FUNCTION FOR THE WHEN THE BUTTON IS PRESSED;

  // * set random background image;
  useEffect(() => {
    const backgroundImages = [bgOne, bgTwo, bgThree];

    let randomBackgroundImage =
      backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

    setRandomBg(randomBackgroundImage);
  }, []);

  return (
    <ImageBackground source={randomBg} style={[styles.container]}>
      <StatusBar backgroundColor="#ddd" />
      <Dice imageUrl={diceImageOne} />
      <Dice imageUrl={diceImageTwo} />

      <Pressable onPress={rollDiceOnTap}>
        <Text style={styles.rollDiceBtnText}>Roll dice</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF2F2",
  },
  diceContainer: {
    margin: 12,
  },
  diceImage: {
    width: 200,
    height: 200,
  },
  rollDiceBtnText: {
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: "#E5E0FF",
    fontSize: 16,
    color: "#8EA7E9",
    fontWeight: "700",
    textTransform: "uppercase",
  },
});
