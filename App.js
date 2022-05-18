import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import Display from "./components/Display";
import { useState } from "react";

export default function App() {
  const [image, setImage] = useState();

  function firstImage() {
    setImage(
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.V3OUwVTePV43pF0egq-iZwHaJ4%26pid%3DApi&f=1"
    );
  }
  function secondImage() {
    setImage(
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MXs4r_EwkeT4V5TCNZ8B6wHaHR%26pid%3DApi&f=1"
    );
  }
  function thirdImage() {
    setImage(
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iIz3UP7graSOwgulsH3WFgHaIW%26pid%3DApi&f=1"
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar></StatusBar>
      <View style={styles.body}>
        <Display image={image} />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity onPress={firstImage}>
          <Image
            style={styles.happyPerson}
            source={{
              url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.ZbQQBlgkGJjvlmDriFaYUQHaI4%26pid%3DApi&f=1",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={secondImage}>
          <Image
            style={styles.sadPerson}
            source={{
              uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.MXs4r_EwkeT4V5TCNZ8B6wHaHR%26pid%3DApi&f=1",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={thirdImage}>
          <Image
            style={styles.straightFace}
            source={{
              uri: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iIz3UP7graSOwgulsH3WFgHaIW%26pid%3DApi&f=1",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  body: {
    flex: 1,
    width: 100,
    height: 100,
    padding: 10,
  },
  footer: {
    flexDirection: "row",
    marginBottom: 5,
    justifyContent: "space-evenly",
  },
  happyPerson: {
    height: 100,
    width: 100,
  },
  sadPerson: {
    height: 100,
    width: 100,
  },
  straightFace: {
    height: 100,
    width: 100,
  },
});
