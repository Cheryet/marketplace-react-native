import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Button,
  Alert,
  Image,
} from "react-native";

export default function App() {
  console.log("App executed");

  return (
    <SafeAreaView style={styles.container}>
      <Text>Hello World!</Text>
      <Image style={styles.image} source={require("./assets/icon.png")} />
      <StatusBar style="auto" />
      <Button
        title="Button"
        onPress={() => {
          console.log("Button Clicked");
        }}
        color="black"
      ></Button>
      <Button
        title="Alert"
        onPress={() => {
          Alert.alert("My Alert", "This is a Alert");
        }}
      ></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: 200,
    width: 200,
  },
  button: {
    backgroundColor: "white",
  },
});
