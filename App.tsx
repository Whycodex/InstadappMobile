import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import WebView from "react-native-webview";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: "https://instadapp.io/" }} style={{ flex: 1 }} />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
