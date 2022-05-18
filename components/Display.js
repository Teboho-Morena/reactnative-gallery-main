import { StyleSheet, View, Image } from "react-native";

export default function Display({ image }) {
  return (
    <View style={styles.container}>
      <Image style={styles.mainImage} source={{ uri: image }} />
    </View>
  );
}
const styles = StyleSheet.create({
  mainImage: {
    padding: 10,
    height: 500,
    width: 300,
  },
});
