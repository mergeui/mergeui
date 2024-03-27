import * as React from "react";
import { useFonts } from "expo-font";
import { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

// import Dripsy from "./components/Dripsy";
// import EmotionNative from "../components/EmotionNative";
import Gluestack from "../components/Gluestack";
import NativeWind from "../components/NativeWind";
import Native from "../components/ReactNative";
import CrossedStyled from "../components/CrossedStyled";
import CrossedStyledWithStyle from "../components/CrossedStyledWithStyle";
import CrossedStyledUseStyleGlobal from "../components/CrossedStyledUseStyleGlobal";
import Restyle from "../components/Restyle";
import StyledComponents from "../components/StyledComponents";
// import Tamagui from "../components/Tamagui";
import TimedRender from "../components/TimedRender";
import Twrnc from "../components/Twrnc";
import { Zephyr } from "../components/Zephyr";
import FastStyles from "../components/FastStyles";
// import Unistyles from "../components/Unistyles";

export default function App() {
  const [styleType, setStyleType] = useState<string | undefined>(undefined);

  const onStyleTypePress = (curry) => () => {
    setStyleType(curry);
    console.log("change for", curry)
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case "React Native":
        return <Native />;
      case "Styled Components":
        return <StyledComponents />;
      // case "Tamagui":
      //   return <Tamagui />;
      case "Restyle":
        return <Restyle />;
      case "NativeWind":
        return <NativeWind />;
      // case "Emotion Native":
      //   return <EmotionNative />;
      case "CrossedStyled":
        return <CrossedStyled />;
      case "CrossedStyledWithStyle":
        return <CrossedStyledWithStyle />;
      case "CrossedStyledUseStyleGlobal":
        return <CrossedStyledUseStyleGlobal />;
      case "Zephyr":
        return <Zephyr />;
      case "Gluestack":
        return <Gluestack />;
      case "Twrnc":
        return <Twrnc />;
      case "FastStyles":
        return <FastStyles />;
      // case "Unistyles":
      //   return <Unistyles />;
      default:
        return null;
    }
  };

  // const [loaded] = useFonts({
  //   Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
  //   InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  // });

  // if (!loaded) {
  //   return null;
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tap a style library to start rendering</Text>
      <Button title="React Native" onPress={onStyleTypePress("React Native")} />
      {/* <Button
        title="react-native-unistyles"
        onPress={onStyleTypePress("Unistyles")}
      /> */}
      <Button title="fast-styles" onPress={onStyleTypePress("FastStyles")} />
      <Button
        title="twrnc (tailwind rn class names)"
        onPress={onStyleTypePress("Twrnc")}
      />
      <Button title="Zephyr" onPress={onStyleTypePress("Zephyr")} />
      <Button title="Restyle" onPress={onStyleTypePress("Restyle")} />
      <Button
        title="Styled Components"
        onPress={onStyleTypePress("Styled Components")}
      />
      {/* <Button
        title="Emotion Native"
        onPress={onStyleTypePress("Emotion Native")}
      /> */}
      <Button title="NativeWind" onPress={onStyleTypePress("NativeWind")} />
      <Button title="Tamagui" onPress={onStyleTypePress("Tamagui")} />
      <Button title="Gluestack" onPress={onStyleTypePress("Gluestack")} />
      <Button
        title="CrossedStyled"
        onPress={onStyleTypePress("CrossedStyled")}
      />
      <Button
        title="CrossedStyledWithStyle"
        onPress={onStyleTypePress("CrossedStyledWithStyle")}
      />
      <Button
        title="CrossedStyledUseStyleGlobal"
        onPress={onStyleTypePress("CrossedStyledUseStyleGlobal")}
      />
      {/* <Button title="Dripsy" onPress={onStyleTypePress("Dripsy")} /> */}
      {styleType ? (
        <TimedRender key={styleType}>
          <Text style={styles.text}>
            Rendering with <Text style={styles.bold}>{styleType}</Text>
          </Text>
        </TimedRender>
      ) : null}
      {renderStyleLibrary()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#fff",
    flex: 1,
    justifyContent: "center",
  },
  text: {
    marginVertical: 12,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
